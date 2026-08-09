const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeAll34PostsStealth() {
  console.log('🚀 Running Stealth Playwright for FULL 34 Posts of @komunitas_senimen...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: { width: 430, height: 932 } // Mobile emulation bypasses IG login modal on scroll!
  });
  
  const page = await context.newPage();
  
  try {
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);

    const postsMap = new Map();

    for (let step = 0; step < 30; step++) {
      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(1200);

      const items = await page.evaluate(() => {
        const list = [];
        const links = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
        links.forEach(a => {
          const img = a.querySelector('img');
          list.push({
            href: a.href,
            src: img ? img.src : null,
            alt: img ? img.alt : ''
          });
        });
        return list;
      });

      items.forEach(it => postsMap.set(it.href, it));
      console.log(`Scroll step ${step+1}/30 -> Unique posts captured: ${postsMap.size}`);
    }

    const allCaptured = Array.from(postsMap.values());
    console.log(`🎉 SUCCESS! Total Posts Captured: ${allCaptured.length}`);

    const result = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      total_posts: allCaptured.length,
      posts: allCaptured
    };

    fs.writeFileSync(path.join(__dirname, 'ig_all_34_posts_scraped.json'), JSON.stringify(result, null, 2));
    console.log(`✅ Saved all ${allCaptured.length} posts to ig_all_34_posts_scraped.json`);

  } catch (err) {
    console.error('❌ Error during mobile stealth scraping:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeAll34PostsStealth();
