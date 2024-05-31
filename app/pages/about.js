var auth = require(process.cwd() + '/index.js')

module.exports = async function ($) {
  var message = await auth($, { user: 'about', pass: 'about' })
  if (typeof message == 'string') return message

  return 'About'
}
