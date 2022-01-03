const express = require('express');
const router = express.Router();

const { saveUserId } = require('../controllers/saveUserId')

router.post('/', saveUserId);

module.exports = router;
