const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeBypassLogin() {
  console.log('🚀 Launching Interactive Browser to scroll & capture ALL 34 Posts...');
  // Launch non-headless so Instagram doesn't immediately block lazy load
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  
  const page = await context.newPage();
  
  try {
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    const postsMap = new Map();

    // Scroll continuously down and click "Show more" if modal appears
    for (let step = 0; step < 25; step++) {
      await page.keyboard.press('PageDown');
      await page.waitForTimeout(1000);

      const scraped = await page.evaluate(() => {
        const items = [];
        const links = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
        links.forEach(a => {
          const img = a.querySelector('img');
          items.push({
            href: a.href,
            src: img ? img.src : null,
            alt: img ? img.alt : ''
          });
        });
        return items;
      });

      scraped.forEach(item => postsMap.set(item.href, item));
      console.log(`Step ${step+1}/25 -> Total Captured: ${postsMap.size} posts`);

      // Try closing login popup if present
      try {
        const closeBtn = await page.$('div[role="dialog"] button, svg[aria-label="Close"]');
        if (closeBtn) await closeBtn.click();
      } catch (e) {}
    }

    const result = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      total_posts: postsMap.size,
      posts: Array.from(postsMap.values())
    };

    fs.writeFileSync(path.join(__dirname, 'ig_full_34_posts_scraped.json'), JSON.stringify(result, null, 2));
    console.log(`🎉 SUCCESS! Captured ${postsMap.size} posts & saved to ig_full_34_posts_scraped.json`);

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeBypassLogin();
