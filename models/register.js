/**
 * @description 组册查询
 */
// const queryList = 'SELECT * FROM uploadContent'
const userRegister = (params) => {
    const { userName } = params;
    const query = `SELECT * FROM user WHERE userName = '${userName}'`;
    return query;
}

//注册用户
const InsertSegisterSql = 'INSERT IGNORE INTO user(userName, password) VALUES(?,?)'

module.exports = {
    userRegister,
    InsertSegisterSql
}
