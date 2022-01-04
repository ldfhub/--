const express = require('express');
const router = express.Router();

const { saveUserLogin } = require('../controllers/saveUserLogin')

router.post('/', saveUserLogin);

module.exports = router;
