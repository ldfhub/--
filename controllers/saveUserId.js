const db = require('../utils/mysql/db');
const addUser = require('../models/saveUserId');

/*
* 应用中间件
*/
// 上传文案中间件
const saveUserId = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    console.log(req)
    // db.query(upload.AddUploadContent, params, (result, fields) => {
    //     if (result) {
    //         res.render('succ', {
    //             data: JSON.stringify({
    //                 msg: '添加成功.'
    //             })
    //         })
    //     } else {
    //         res.render('fail', {
    //             data: JSON.stringify({
    //                 msg: '添加失败.'
    //             })
    //         })
    //     }
    // });
}
module.exports = {
    saveUserId
}
