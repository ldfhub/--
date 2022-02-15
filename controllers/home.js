const db = require('../utils/mysql/db');
const query = require('../models/home');

/*
* 应用中间件
*/
// 查询数据中间件
const queryHome = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { type, wxId, wxNickName } = req.body;
    const params = {type, wxId, wxNickName};
    db.query(query.queryHome(params), [], (result, fields) => {
        console.log(result, '000')
        if (result) {
            res.render('succ', {
                data: JSON.stringify({
                    msg: 'OK',
                    list: result
                })
            })
        } else {
            res.render('fail', {
                data: JSON.stringify({
                    msg: 'error'
                })
            })
        }
    });
}
module.exports = {
    queryHome
}

