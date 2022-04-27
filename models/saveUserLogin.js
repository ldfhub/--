/**
 * desc: 保存用户的ID，通过后端的加密算法生成(注册时)
 */
const userLogin = (params) => {
    const { userName, password } = params;
    const query = `SELECT * FROM user WHERE userName = '${userName}' AND password = '${password}'`;
    return query;
}

module.exports = {
    userLogin
}