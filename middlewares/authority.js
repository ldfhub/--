const { Token } = require('../utils/tools')

// 鉴权验证tokens
const authority = (req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    // console.log(req.headers['authorization']);
    // // console.log(req.header['Authorization'])
    const tokenString = req.headers['authorization'].substring(7);
    // console.log(tokenString)
    const decode = Token.decrypt(tokenString)
    console.log(decode)
    // res.render('fail',{
    //     data: JSON.stringify({
    //         msg: '未登陆'
    //     })
    // })
}

module.exports = {
    authority
}