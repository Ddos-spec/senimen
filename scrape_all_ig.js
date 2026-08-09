const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeAllIGPosts() {
  console.log('🚀 Starting Deep Scroll Scraper for ALL 34 Posts of @komunitas_senimen...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 1000 }
  });
  
  const page = await context.newPage();
  
  try {
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 40000 });
    await page.waitForTimeout(3000);

    const postsSet = new Map();

    // Auto-scroll down to trigger lazy loading for all 34 posts
    for (let i = 0; i < 15; i++) {
      await page.evaluate(() => window.scrollBy(0, 1000));
      await page.waitForTimeout(1500);

      // Collect links and images on every scroll step
      const currentItems = await page.evaluate(() => {
        const items = [];
        const postAnchors = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
        postAnchors.forEach(a => {
          const img = a.querySelector('img');
          items.push({
            href: a.href,
            src: img ? img.src : null,
            alt: img ? img.alt : ''
          });
        });
        return items;
      });

      currentItems.forEach(item => {
        if (!postsSet.has(item.href)) {
          postsSet.set(item.href, item);
        }
      });

      console.log(`Scroll step ${i+1}: total unique posts captured so far = ${postsSet.size}`);
    }

    const allPosts = Array.from(postsSet.values());
    console.log(`🎉 FINISHED! Total unique posts & media captured: ${allPosts.length}`);

    const finalOutput = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      total_captured: allPosts.length,
      posts: allPosts
    };

    const outputPath = path.join(__dirname, 'ig_all_34_posts.json');
    fs.writeFileSync(outputPath, JSON.stringify(finalOutput, null, 2));
    console.log(`✅ Saved ALL ${allPosts.length} posts & media links to: ${outputPath}`);

  } catch (err) {
    console.error('❌ Error during full IG scraping:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeAllIGPosts();
