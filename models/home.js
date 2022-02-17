// 查询文案sql（查询）
// const queryList = 'SELECT * FROM uploadContent'
// const queryJoke = (params) => {
//     const { id, joke } = params;
//     const query = `SELECT * FROM joke WHERE type = '${type}' AND wxId = '${wxId}'`;
//     const query1 = `SELECT * FROM joke WHERE id >= ((SELECT MAX(id) FROM joke)-(SELECT MIN(id) FROM joke)) * RAND() + (SELECT MIN(id) FROM joke) LIMIT 1`
//     return query1;
// }
const queryJoke = 'SELECT joke as content,id FROM joke WHERE id >= ((SELECT MAX(id) FROM joke)-(SELECT MIN(id) FROM joke)) * RAND() + (SELECT MIN(id) FROM joke) LIMIT 1';
const queryLoveWords = 'SELECT ishan,id FROM loveWords WHERE id >= ((SELECT MAX(id) FROM loveWords)-(SELECT MIN(id) FROM loveWords)) * RAND() + (SELECT MIN(id) FROM loveWords) LIMIT 1';
const queryHotWords = 'SELECT content,id FROM hotWords WHERE id >= ((SELECT MAX(id) FROM hotWords)-(SELECT MIN(id) FROM hotWords)) * RAND() + (SELECT MIN(id) FROM hotWords) LIMIT 1';
const queryWisdom = 'SELECT zh,id FROM wisdom WHERE id >= ((SELECT MAX(id) FROM wisdom)-(SELECT MIN(id) FROM wisdom)) * RAND() + (SELECT MIN(id) FROM wisdom) LIMIT 1';
const finalQuery = `(${queryJoke}) UNION ALL (${queryLoveWords}) UNION ALL (${queryHotWords}) UNION ALL (${queryWisdom})`
module.exports = {
    finalQuery
}