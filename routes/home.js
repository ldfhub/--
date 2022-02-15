const express = require('express');
const router = express.Router();

const { queryHome } = require('../controllers/home');
// const { authority } = require('../middlewares/authority');

router.post('/queryHome', queryHome);

module.exports = router;
