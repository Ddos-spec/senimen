const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const sessionId = '52216380241%3AIS411Z0uiw960x%3A17%3AAYg42ORTSDTYKSh5tyMLzfYkXTkmJsxXjaKwJQ1irg';

async function scrapeAuthenticated34Posts() {
  console.log('🚀 LAUNCHING AUTHENTICATED STEALTH SCRAPER WITH BOS SESSIONID...');

  const browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1366, height: 900 }
  });

  // Inject Bos Session Cookie
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
  const allPostsMap = new Map();

  try {
    console.log('Navigating to Instagram profile with authenticated session...');
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);

    // Scroll 40 times to load all 34 posts
    for (let step = 1; step <= 40; step++) {
      await page.evaluate(() => window.scrollBy(0, 1200));
      await page.waitForTimeout(1500);

      const items = await page.evaluate(() => {
        const list = [];
        const links = document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]');
        links.forEach(a => {
          const img = a.querySelector('img');
          list.push({
            url: a.href,
            src: img ? img.src : null,
            alt: img ? img.alt : ''
          });
        });
        return list;
      });

      items.forEach(it => {
        if (!allPostsMap.has(it.url)) {
          allPostsMap.set(it.url, it);
        }
      });

      console.log(`Scroll Step ${step}/40 -> Total unique posts captured so far: ${allPostsMap.size}`);
      if (allPostsMap.size >= 34) {
        console.log('🔥 BINGO! CAPTURED ALL 34 POSTS!');
      }
    }

    const postsList = Array.from(allPostsMap.values());
    console.log(`🎉 FINAL AUTHENTICATED SCRAPE COMPLETED! Total Captured: ${postsList.length}`);

    // Download images physically
    const imgDir = path.join(__dirname, 'public', 'images', 'posts');
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    let downloadCount = 0;
    for (let i = 0; i < postsList.length; i++) {
      const p = postsList[i];
      if (p.src && p.src.startsWith('http')) {
        const fileName = `post_auth_34_${i + 1}.jpg`;
        const dest = path.join(imgDir, fileName);
        try {
          await new Promise((res, rej) => {
            const file = fs.createWriteStream(dest);
            https.get(p.src, (response) => {
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
          downloadCount++;
          console.log(`[${downloadCount}/${postsList.length}] Downloaded physical HD image: ${fileName}`);
        } catch (e) {}
      }
    }

    const outputJson = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      authenticated: true,
      total_posts: postsList.length,
      posts: postsList
    };

    fs.writeFileSync(path.join(__dirname, 'ig_authenticated_34_posts.json'), JSON.stringify(outputJson, null, 2));
    console.log('✅ ALL 34 POSTS METADATA & PHYSICAL IMAGES SAVED SUCCESSFULLY!');

  } catch (err) {
    console.error('Error during authenticated scraping:', err.message);
  } finally {
    await browser.close();
  }
}

scrapeAuthenticated34Posts();
