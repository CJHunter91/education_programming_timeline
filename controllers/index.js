var express = require('express');
var router = express.Router();

router.use('/api/languages', require('./languages'));
router.use('/api/text', require('./text'));

module.exports = router;