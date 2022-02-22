const db = require('../utils/mysql/db');
const query = require('../models/home');

/*
* 应用中间件
*/
// 查询数据中间件
const queryHome = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    // let params;
     // const { type, wxId, wxNickName } = req.body;
    // const params = {type, wxId, wxNickName};
    if (JSON.stringify(req.body) !== '{}') {
        const { type } = req.body;
        if (type === 'JOKE') {
            db.query(query.queryJoke, [], (result, fields) => {
                result[0].type = 'JOKE';
                // result[1].type = 'LOVEWORDS',
                // result[2].type = 'HOTWORDS',
                // result[3].type = 'WISDOM'
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
    } else {
        db.query(query.finalQuery, [], (result, fields) => {
            result[0].type = 'JOKE';
            result[1].type = 'LOVEWORDS';
            result[2].type = 'HOTWORDS';
            result[3].type = 'WISDOM';
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
}
module.exports = {
    queryHome
}

