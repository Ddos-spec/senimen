const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');

const sessionId = '52216380241%3AIS411Z0uiw960x%3A17%3AAYg42ORTSDTYKSh5tyMLzfYkXTkmJsxXjaKwJQ1irg';

async function downloadPhysicalReelVideos() {
  console.log('🎬 LAUNCHING DIRECT VIDEO REEL SCRAPER & MP4 DOWNLOADER...');

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
  const reelVideoUrlsMap = new Map();

  // Intercept network responses specifically for .mp4 video files
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('.mp4') || (response.headers()['content-type'] && response.headers()['content-type'].includes('video/mp4'))) {
      if (!reelVideoUrlsMap.has(url)) {
        reelVideoUrlsMap.set(url, url);
        console.log(`🎥 Caught raw MP4 video stream! Total MP4 streams: ${reelVideoUrlsMap.size}`);
      }
    }
  });

  try {
    console.log('Navigating to Instagram profile...');
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Get all Reel post URLs
    const reelLinks = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="/reel/"]')).map(a => a.href);
    });

    console.log(`Found ${reelLinks.length} Reels post links! Opening each Reel to capture raw .MP4 video stream...`);

    for (let i = 0; i < reelLinks.length; i++) {
      const rUrl = reelLinks[i];
      console.log(`[${i + 1}/${reelLinks.length}] Loading Reel: ${rUrl}`);
      try {
        await page.goto(rUrl, { waitUntil: 'networkidle', timeout: 25000 });
        await page.waitForTimeout(3000);

        // Try playing video DOM element
        await page.evaluate(() => {
          document.querySelectorAll('video').forEach(v => {
            v.play();
          });
        });
        await page.waitForTimeout(2000);
      } catch (e) {}
    }

    const videoList = Array.from(reelVideoUrlsMap.keys());
    console.log(`🎉 CAPTURED ${videoList.length} RAW MP4 VIDEO STREAMS!`);

    // Download physical .mp4 files
    const videoDir = path.join(__dirname, 'public', 'videos', 'reels');
    if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

    let downloadCount = 0;
    for (let i = 0; i < videoList.length; i++) {
      const vUrl = videoList[i];
      const fileName = `reel_video_${i + 1}.mp4`;
      const dest = path.join(videoDir, fileName);

      try {
        await new Promise((res, rej) => {
          const file = fs.createWriteStream(dest);
          https.get(vUrl, (response) => {
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
        console.log(`[${downloadCount}/${videoList.length}] Saved physical MP4 video: public/videos/reels/${fileName}`);
      } catch (e) {}
    }

    fs.writeFileSync(path.join(__dirname, 'ig_reels_mp4_links.json'), JSON.stringify(videoList, null, 2));
    console.log(`✅ COMPLETED! Saved ${downloadCount} physical .MP4 video files to public/videos/reels/!`);

  } catch (err) {
    console.error('Error during video reel scrape:', err.message);
  } finally {
    await browser.close();
  }
}

downloadPhysicalReelVideos();
