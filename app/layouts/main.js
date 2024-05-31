module.exports = async function ($) {
  return /* HTML */ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="/haka.js"></script>
      </head>
      <body>
        ${$.page.content}
      </body>
    </html>`
}
