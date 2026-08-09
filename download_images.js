const fs = require('fs');
const path = require('path');
const https = require('https');

const jsonPath = path.join(__dirname, 'ig_all_34_posts_graphql.json');
const imgDir = path.join(__dirname, 'public', 'images', 'posts');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const rawData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(rawData);

console.log(`🚀 Starting physical download of ${data.posts.length} HD images to ${imgDir}...`);

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        fs.unlink(dest, () => {});
        reject(`Server responded with ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
}

async function downloadAll() {
  let count = 0;
  for (let i = 0; i < data.posts.length; i++) {
    const post = data.posts[i];
    if (post.display_url) {
      const fileName = `post_${i + 1}_${post.shortcode || 'img'}.jpg`;
      const filePath = path.join(imgDir, fileName);
      try {
        await downloadImage(post.display_url, filePath);
        count++;
        console.log(`[${count}/${data.posts.length}] Saved physical image: public/images/posts/${fileName}`);
      } catch (err) {
        console.error(`Failed downloading post ${i + 1}:`, err);
      }
    }
  }
  console.log(`🎉 DOWNLOAD COMPLETED! ${count} physical image files saved locally.`);
}

downloadAll();
