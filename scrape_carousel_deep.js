const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const sessionId = '52216380241%3AIS411Z0uiw960x%3A17%3AAYg42ORTSDTYKSh5tyMLzfYkXTkmJsxXjaKwJQ1irg';

async function scrapeCarouselAndMediaDeep() {
  console.log('🚀 LAUNCHING MULTI-SLIDE CAROUSEL & REEL MEDIA SCRAPER...');

  const browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1366, height: 900 }
  });

  await context.addCookies([
    {
      name: 'sessionid',
      value: sessionId,
      domain: '.instagram.com',
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    }
  ]);

  const page = await context.newPage();
  const allMediaMap = new Map();

  // Intercept all GraphQL responses for Carousel sub-items & Video URLs
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('/graphql/query') || url.includes('/api/v1/feed/user/')) {
      try {
        const json = await response.json();
        const jsonStr = JSON.stringify(json);
        
        // Find all image & video URLs inside GraphQL response payload
        const imgMatches = jsonStr.match(/https:\\\/\\\/instagram\.[a-z0-9-]+\.fna\.fbcdn\.net\\\/v\\\/[^"'\s\\]+/g) || [];
        imgMatches.forEach(rawUrl => {
          const cleanUrl = rawUrl.replace(/\\\\/g, '/').replace(/\\u0026/g, '&');
          if (!allMediaMap.has(cleanUrl)) {
            allMediaMap.set(cleanUrl, { type: 'image_or_video_frame', url: cleanUrl });
          }
        });
      } catch (e) {}
    }
  });

  try {
    console.log('Navigating to Instagram profile...');
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(4000);

    // Get all post links
    const postLinks = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')).map(a => a.href);
    });

    console.log(`Found ${postLinks.length} post links! Now opening each post to extract ALL carousel slides & videos...`);

    for (let i = 0; i < postLinks.length; i++) {
      const pUrl = postLinks[i];
      console.log(`[${i + 1}/${postLinks.length}] Opening post modal: ${pUrl}`);
      try {
        await page.goto(pUrl, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(2000);

        // Click next arrow on carousel up to 10 times to force load all carousel slides
        for (let slide = 1; slide <= 10; slide++) {
          const nextBtn = await page.$('button[aria-label="Next"], button._af3r, svg[aria-label="Next"]');
          if (nextBtn) {
            await nextBtn.click();
            await page.waitForTimeout(1000);
          } else {
            break;
          }
        }

        // Collect all rendered images & videos in DOM
        const domMedia = await page.evaluate(() => {
          const res = [];
          document.querySelectorAll('img[src*="fbcdn.net"], video[src*="fbcdn.net"]').forEach(el => {
            if (el.src) res.push(el.src);
          });
          return res;
        });

        domMedia.forEach(src => {
          if (!allMediaMap.has(src)) {
            allMediaMap.set(src, { type: 'slide_image', url: src, postUrl: pUrl });
          }
        });

      } catch (e) {
        console.error(`Skipping post ${pUrl} due to timeout`);
      }
    }

    const allMediaList = Array.from(allMediaMap.values());
    console.log(`🎉 TOTAL INDIVIDUAL CAROUSEL SLIDES & MEDIA CAPTURED: ${allMediaList.length}`);

    // Download every single slide & video cover physically
    const imgDir = path.join(__dirname, 'public', 'images', 'carousel_all');
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    let count = 0;
    for (let i = 0; i < allMediaList.length; i++) {
      const m = allMediaList[i];
      const fileName = `slide_${i + 1}.jpg`;
      const dest = path.join(imgDir, fileName);
      try {
        await new Promise((res, rej) => {
          const file = fs.createWriteStream(dest);
          https.get(m.url, (response) => {
            if (response.statusCode === 200) {
              response.pipe(file);
              file.on('finish', () => file.close(res));
            } else {
              fs.unlink(dest, () => {});
              rej();
            }
          }).on('error', () => {
            fs.unlink(dest, () => {});
            rej();
          });
        });
        count++;
        console.log(`[${count}/${allMediaList.length}] Saved slide image: public/images/carousel_all/${fileName}`);
      } catch (e) {}
    }

    fs.writeFileSync(path.join(__dirname, 'ig_all_carousel_slides.json'), JSON.stringify(allMediaList, null, 2));
    console.log(`✅ FINISHED! Downloaded ${count} individual slides into public/images/carousel_all/!`);

  } catch (err) {
    console.error('Error during deep carousel scrape:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeCarouselAndMediaDeep();
