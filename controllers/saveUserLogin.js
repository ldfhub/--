const db = require('../utils/mysql/db');
const userLogin = require('../models/saveUserLogin');
const https = require('https');
const { Token } = require('../utils/tools.ts')
/*
* 应用中间件
*/
// 用户登陆中间件
const saveUserLogin = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { code, nickName } = req.body;
    const appid = "wx967483df661abe9c"; //自己小程序后台管理的appid，可登录小程序后台查看
    const secret = "71409ea4974e6428eba5cc264bf736ab"; //小程序后台管理的secret，可登录小程序后台查看
    const grant_type = "authorization_code";
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=${grant_type}`
    if(code) {
        await https.get(url, (result) => {
            result.on('data', (info) => {
                token = Token.encrypt(JSON.parse(info), '365d')
                const params = [nickName, JSON.parse(info).openid]
                db.query(userLogin.AddUser, params, (result, fields) => {
                    if (result) {
                        res.render('succ', {
                            data: JSON.stringify({
                                token,
                                openid: JSON.parse(info).openid,
                                msg: '登陆成功'
                            })
                        })
                    } else {
                        res.render('fail', {
                            data: JSON.stringify({
                                msg: '登陆失败.'
                            })
                        })
                    }
                });
            })
        })
    } else {
        res.render('fail', {
            data: JSON.stringify({
                msg: 'code错误！'
            })
        })
    }
}
module.exports = {
    saveUserLogin
}
