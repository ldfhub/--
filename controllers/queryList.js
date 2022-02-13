const db = require('../utils/mysql/db');
const query = require('../models/queryList');

/*
* 应用中间件
*/
// 查询数据中间件
const queryList = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { type, wxId, wxNickName } = req.body;
    const params = [type, wxId, wxNickName];
    db.query(query.queryList(params), [], (result, fields) => {
        if (result) {
            res.render('succ', {
                data: JSON.stringify({
                    msg: '添加成功.'
                })
            })
        } else {
            res.render('fail', {
                data: JSON.stringify({
                    msg: '添加失败.'
                })
            })
        }
    });
}
module.exports = {
    queryList
}
