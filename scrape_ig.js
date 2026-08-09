const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeInstagram() {
  console.log('🚀 Starting Stealth Playwright Scraper for @komunitas_senimen...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 }
  });
  
  const page = await context.newPage();
  
  try {
    console.log('Navigating to Instagram profile...');
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(4000);
    
    // Screenshot for visual audit
    const screenshotPath = path.join(__dirname, 'ig_scraped_preview.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Saved IG screenshot preview to: ${screenshotPath}`);

    // Extract raw text & links from page
    const pageData = await page.evaluate(() => {
      const bioText = document.body.innerText;
      const links = Array.from(document.querySelectorAll('a')).map(a => ({
        text: a.innerText,
        href: a.href
      }));
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        alt: img.alt,
        src: img.src
      }));
      return { bioText, links, images };
    });

    const outputData = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      raw_text: pageData.bioText.substring(0, 5000), // First 5000 chars
      links: pageData.links.filter(l => l.href.includes('instagram.com/p/') || l.href.includes('http')),
      images_sample: pageData.images.slice(0, 20)
    };

    const dataPath = path.join(__dirname, 'ig_scraped_data.json');
    fs.writeFileSync(dataPath, JSON.stringify(outputData, null, 2));
    console.log(`✅ Saved IG scraped data to: ${dataPath}`);

  } catch (err) {
    console.error('❌ Error during IG scraping:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeInstagram();
