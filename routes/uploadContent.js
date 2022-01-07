const express = require('express');
const router = express.Router();

const { uploadContent } = require('../controllers/uploadContent');
const { authority } = require('../middlewares/authority');

router.post('/content', authority);

module.exports = router;