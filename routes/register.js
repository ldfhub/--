const express = require('express');
const router = express.Router();

const { saveUserRegister } = require('../controllers/register')

router.post('/', saveUserRegister);

module.exports = router;
