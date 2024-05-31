var auth = require(process.cwd() + '/index.js')

module.exports = async function ($) {
  var message = await auth($, { user: 'hello', pass: 'hello' })
  if (typeof message == 'string') return message

  return 'Hello'
}
