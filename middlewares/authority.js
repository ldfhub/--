const token = require('../utils/tools.ts')

// 鉴权验证token
const authority = (req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    // console.log(req.headers['authorization']);
    // // console.log(req.header['Authorization'])
    const tokenString = req.headers['authorization'].substring(7);
    console.log('111111111')
    const decode = token.decrypt(tokenString)
    console.log(decode)
    if (decode) {
        next()
    }
}

module.exports = {
    authority
}