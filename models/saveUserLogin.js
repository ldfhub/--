/**
 * desc: 保存用户的ID，通过后端的加密算法生成(注册时)
 */
// 添加文案sql（添加）
const AddUser = 'INSERT IGNORE INTO user(wxNickName, userOpenId) VALUES(?,?)'

module.exports = {
    AddUser
}