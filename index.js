function basicAuth($, opt) {
  var realm = opt.realm ? ` realm="${opt.realm}"` : ''
  $.res.setHeader('www-authenticate', `Basic${realm}`)
  $.res.statusCode = 401
  return 'Not authorized'
}

module.exports = async function ($, opt = {}) {
  if (typeof opt.message != 'string') {
    opt.message = 'Please enter your username and password'
  }

  if (typeof opt.user != 'string') {
    opt.user = 'admin'
  }

  if (typeof opt.pass != 'string') {
    opt.pass = 'password'
  }

  var auth = $.req.headers.authorization

  if (!auth) {
    return basicAuth($, opt)
  }

  console.log({ auth })
  var base = (auth.split(' ')[1] || '').trim()
  var [user, pass] = new Buffer.from(base, 'base64').toString().split(':')

  if (user != opt.user || pass != opt.pass) {
    return basicAuth($, opt)
  }
}
