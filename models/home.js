// 查询文案sql（查询）
// const queryList = 'SELECT * FROM uploadContent'
const queryHome = (params) => {
    const { type, wxId, wxNickName } = params;
    const query = `SELECT * FROM uploadContent WHERE type = '${type}' AND wxId = '${wxId}'`;
    return query;
}

module.exports = {
    queryHome
}