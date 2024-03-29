// 查询文案sql（查询）
// const queryList = 'SELECT * FROM uploadContent'
// const queryJoke = (params) => {
//     const { id, joke } = params;
//     const query = `SELECT * FROM joke WHERE type = '${type}' AND wxId = '${wxId}'`;
//     const query1 = `SELECT * FROM joke WHERE id >= ((SELECT MAX(id) FROM joke)-(SELECT MIN(id) FROM joke)) * RAND() + (SELECT MIN(id) FROM joke) LIMIT 1`
//     return query1;
// }
const queryJoke = 'SELECT joke as content,id,collect,easyLike,en FROM joke WHERE id >= ((SELECT MAX(id) FROM joke)-(SELECT MIN(id) FROM joke)) * RAND() + (SELECT MIN(id) FROM joke) LIMIT 1';
const queryLoveWords = 'SELECT ishan as content,setId as id,collect,easyLike,en FROM loveWords WHERE setId >= ((SELECT MAX(setId) FROM loveWords)-(SELECT MIN(setId) FROM loveWords)) * RAND() + (SELECT MIN(setId) FROM loveWords) LIMIT 1';
const queryHotWords = 'SELECT content,setId as id,collect,easyLike,en FROM hotWords WHERE setId >= ((SELECT MAX(setId) FROM hotWords)-(SELECT MIN(setId) FROM hotWords)) * RAND() + (SELECT MIN(setId) FROM hotWords) LIMIT 1';
const queryWisdom = 'SELECT zh as content,id,collect,easyLike,en FROM wisdom WHERE id >= ((SELECT MAX(id) FROM wisdom)-(SELECT MIN(id) FROM wisdom)) * RAND() + (SELECT MIN(id) FROM wisdom) LIMIT 1';
const finalQuery = `(${queryJoke}) UNION ALL (${queryLoveWords}) UNION ALL (${queryHotWords}) UNION ALL (${queryWisdom})`
module.exports = {
    finalQuery,
    queryJoke,
    queryLoveWords,
    queryHotWords,
    queryWisdom
}