const express = require('express');
const router = express.Router();

const { uploadContent } = require('../controllers/uploadContent')

router.post('/content', uploadContent);

module.exports = router;