const db = require('../utils/mysql/db');
const query = require('../models/register.js');
/*
* 应用中间件
*/

// web端登录
const saveUserRegister = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { userName, password } = req.body;
    const params = {userName};
    const params1 = { userName, password }
    db.query(query.userRegister(params),[],(result, fields) => {
        if (result.length !== 0) {
            res.render('fail', {
                data: JSON.stringify({
                    msg: 'err',
                    data: '已存在该用户名'
                })
            })
        } else {
            db.query(query.InsertSegisterSql,params1, (result, fields) => {
                if (result) {
                    res.render('succ', {
                        data: JSON.stringify({
                            msg: 'OK',
                            data: '注册成功！'
                        })
                    })
                } else {
                    es.render('fail', {
                        data: JSON.stringify({
                            msg: '注册失败.'
                        })
                    })
                }
            })
        }
    })
}
module.exports = {
    saveUserRegister
}

