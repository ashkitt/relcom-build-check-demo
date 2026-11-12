import test from 'node:test';
import assert from 'node:assert/strict';
import {renderPage} from '../src/page.mjs';

test('the page has its heading and escapes the label', () => {
  const html = renderPage('<b>');
  assert.match(html, /<h1>Build check demo<\/h1>/);
  assert.match(html, /&lt;b&gt;/);
});
