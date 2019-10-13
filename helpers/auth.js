const jwt = require('jsonwebtoken')

const secretJWT = 'my-secret-from-env-file-in-prod'

module.exports.addUser = ({ id, email, profession }) => jwt.sign({ id, email, profession }, secretJWT, { expiresIn: '30d' })

module.exports.getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, secretJWT)
    }
    return null
  } catch (err) {
    return null
  }
}
