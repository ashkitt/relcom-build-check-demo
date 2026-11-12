// Writes dist/index.html from src/page.mjs.
import {mkdirSync, writeFileSync} from 'node:fs';
import {renderPage} from './src/page.mjs';

mkdirSync('dist', {recursive: true});
writeFileSync('dist/index.html', renderPage("Репозиторий, ветка claude"));
console.log('dist/index.html written');
