const formatAuth = ({ password, username }) => {
  let auth = ''
  if (username) {
    auth += username
    if (password) {
      auth += `:${password}`
    }
  }

  return auth
}

export default formatAuth
