var auth = require(process.cwd() + '/index.js')

module.exports = async function ($) {
  var message = await auth($, { user: 'admin', pass: 'password' })
  if (typeof message == 'string') {
    return message
  }
}
