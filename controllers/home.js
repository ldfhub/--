const db = require('../utils/mysql/db');
const query = require('../models/home');

/*
* 封装多条和单条数据查询
*/
const signleList = (func, type, res) => {
    db.query(func, [], (result, fields) => {
        result[0].type = type;
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
        // 传入的body中有值
        const { type } = req.body;
        if (type === 'JOKE') {
            signleList(query.queryJoke, 'JOKE', res)
        } else if (type === 'LOVEWORDS') {
            signleList(query.queryLoveWords, 'LOVEWORDS', res)
        } else if (type === 'HOTWORDS') {
            signleList(query.queryHotWords, 'HOTWORDS', res)
        } else if (type === 'WISDOM') {
            signleList(query.queryWisdom, 'WISDOM', res)
        }
    } else {
        // 传入的body中是一个空对象值
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

