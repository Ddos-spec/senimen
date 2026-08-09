const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function fetchGraphQLPosts() {
  console.log('🚀 Launching GraphQL API Interceptor for ALL 34 Posts of @komunitas_senimen...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  const capturedPosts = new Map();

  // Listen to network JSON responses from IG internal GraphQL API
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('/graphql/query') || url.includes('/api/v1/feed/user/') || url.includes('/api/v1/users/web_profile_info')) {
      try {
        const json = await response.json();
        // Parse edges/nodes from IG GraphQL payload
        const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges || 
                      json?.data?.user?.edge_felix_video_timeline?.edges || [];
        
        edges.forEach(edge => {
          const node = edge.node;
          if (node) {
            const shortcode = node.shortcode;
            const postUrl = `https://www.instagram.com/p/${shortcode}/`;
            capturedPosts.set(postUrl, {
              id: node.id,
              shortcode: shortcode,
              url: postUrl,
              display_url: node.display_url,
              is_video: node.is_video,
              caption: node.edge_media_to_caption?.edges[0]?.node?.text || '',
              like_count: node.edge_media_preview_like?.count || 0,
              comment_count: node.edge_media_to_comment?.count || 0,
              timestamp: node.taken_at_timestamp
            });
          }
        });
        console.log(`🌐 GraphQL Interceptor caught network payload! Total unique posts: ${capturedPosts.size}`);
      } catch (e) {}
    }
  });

  try {
    await page.goto('https://www.instagram.com/komunitas_senimen/', { waitUntil: 'networkidle', timeout: 35000 });
    await page.waitForTimeout(3000);

    // Trigger scroll and pagination GraphQL requests
    for (let i = 0; i < 20; i++) {
      await page.evaluate(() => window.scrollBy(0, 1200));
      await page.waitForTimeout(1500);

      // DOM fallback check
      const domLinks = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/reel/"]')).map(a => ({
          href: a.href,
          src: a.querySelector('img')?.src || null,
          alt: a.querySelector('img')?.alt || ''
        }));
      });

      domLinks.forEach(item => {
        if (!capturedPosts.has(item.href)) {
          capturedPosts.set(item.href, {
            url: item.href,
            display_url: item.src,
            caption: item.alt
          });
        }
      });
      console.log(`Step ${i+1}: Captured ${capturedPosts.size} posts`);
    }

    const resultList = Array.from(capturedPosts.values());
    console.log(`🎉 FINISHED! Total captured posts & media: ${resultList.length}`);

    const finalOutput = {
      scraped_at: new Date().toISOString(),
      profile: 'komunitas_senimen',
      total_captured: resultList.length,
      posts: resultList
    };

    const outPath = path.join(__dirname, 'ig_all_34_posts_graphql.json');
    fs.writeFileSync(outPath, JSON.stringify(finalOutput, null, 2));
    console.log(`✅ Saved all ${resultList.length} posts to: ${outPath}`);

  } catch (err) {
    console.error('Error during GraphQL scraping:', err.message);
  } finally {
    await browser.close();
  }
}

fetchGraphQLPosts();
