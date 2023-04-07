const middleware = {}

middleware['login-auth'] = require('..\\middleware\\login-auth.js')
middleware['login-auth'] = middleware['login-auth'].default || middleware['login-auth']

export default middleware
