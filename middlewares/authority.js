const { Token } = require('../utils/tools')

// 鉴权验证tokens
const authority = (req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const tokenString = req.headers['authorization']?.substring(7);
    const decode = Token.decrypt(tokenString)
    console.log(decode)
    if (decode) {
        next();
    } else {
        res.render('fail',{
            data: JSON.stringify({
                msg: 'token验证失败'
            })
        })
    }
}

module.exports = {
    authority
}