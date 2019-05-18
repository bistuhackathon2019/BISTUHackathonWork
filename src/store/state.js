let defaultUserInfo = {}
let hasLogin = false
let token = ''

try {
  hasLogin = localStorage.hasLogin === 'true'
  defaultUserInfo = JSON.parse(localStorage.getItem('userInfo'))
  token = localStorage.token
} catch (e) {}

export default {
  userInfo: defaultUserInfo,
  token: token,
  hasLogin: hasLogin
}
