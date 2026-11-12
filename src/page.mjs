// The one page of the website.
export function renderPage(label) {
  const text = String(label).replace(/[&<>]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'})[c]);
  return `<!doctype html>\n<html lang="ru">\n<head><meta charset="utf-8"><title>Build check demo</title></head>\n`
    + `<body><h1>Build check demo</h1><p>${text}</p></body>\n</html>\n`;
}
