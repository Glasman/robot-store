const express = require('express');
const router = express.Router();

//router /api/robots
router.use('/robots', require ('./robots.cjs'));

module.exports = router;