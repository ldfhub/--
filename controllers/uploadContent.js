const db = require('../utils/mysql/db');
const upload = require('../models/uploadContent');

/*
* 应用中间件
*/
// 上传文案中间件
const uploadContent = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { title, content, type } = req.body;
    const addRes = await db.query(upload.AddUploadContent(title, content, type));
    console.log(addRes,'0000')
    if (addRes) {
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
}
module.exports = {
    uploadContent
}