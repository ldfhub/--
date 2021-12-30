const db = require('../utils/mysql/db');
const upload = require('../models/uploadContent');

/*
* 应用中间件
*/
// 上传文案中间件
const uploadContent = async(req, res, next) => {
    res.set('Content-Type', 'application/json; charset=utf-8')
    const { title, content, type } = rea.body;
    const addRes = await db.query(upload.AddUploadContent(title, content, type));
    if (addRes) {
        res.render('succ', {
            data: JSON.stringify({
                msg: '添加成功.'
            })
        })
    }
}
module.exports = {
    uploadContent
}