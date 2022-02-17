const db = require('../utils/mysql/db');
const query = require('../models/home');

/*
* 应用中间件
*/
// 查询数据中间件
const queryHome = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    // let params;
    // if (JSON.stringify(req.body) !== '{}') {

    // }
    // const { type, wxId, wxNickName } = req.body;
    // const params = {type, wxId, wxNickName};
    db.query(query.finalQuery, [], (result, fields) => {
        // const res = [
        //     {
        //         joke: {
        //             data: ''
        //         }
        //     },
        //     {
        //         hotWords: {
        //             data
        //         }
        //     }
        // ]
        result[0].type = 'JOKE',
        result[1].type = 'LOVEWORDS',
        result[2].type = 'HOTWORDS',
        result[3].type = 'WISDOM'
        console.log(result[0]);
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

