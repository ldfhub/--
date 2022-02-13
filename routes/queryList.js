const express = require('express');
const router = express.Router();

const { queryList } = require('../controllers/queryList');
const { authority } = require('../middlewares/authority');

router.post('/queryList', authority, queryList);

module.exports = router;
