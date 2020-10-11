const formatAuth = ({ password, username }) => {
  let auth = null
  if (username) {
    auth = ''
    auth += username
    if (password) {
      auth += `:${password}`
    }
  }

  return auth
}

export default formatAuth
