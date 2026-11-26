import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const source = 'demo-app';
const destination = 'docs/demo';
mkdirSync(destination, { recursive: true });
for (const filename of ['index.html', 'styles.css', 'app.js']) {
  copyFileSync(join(source, filename), join(destination, filename));
}
console.log(`Copied demo app to ${destination}/ for GitHub Pages.`);
