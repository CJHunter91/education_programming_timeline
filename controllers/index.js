var express = require('express');
var router = express.Router();

router.use('/api/languages', require('./languages'));

module.exports = router;