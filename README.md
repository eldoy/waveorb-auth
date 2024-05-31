# Waveorb auth

Authentication functions for [Waveorb.](https://waveorb.com)

Currently only HTTP Basic is supported.

### Install

```
npm i waveorb-auth
```

### Usage

In your `before hook` add this:

```js
var auth =  require('waveorb-auth')

var message = await auth($, { user: 'admin', pass: 'password' })
if (typeof message == 'string') {
  // The message is what the user sees on cancel
  return message
}
```

MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)