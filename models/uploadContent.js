// 添加文案sql
const AddUploadContent = (title, content, type) => {
    return `INSERT INTO uploadContent (title, content, type) VALUES (${title}, ${content}, ${type})`
}

module.exports = {
    AddUploadContent
}