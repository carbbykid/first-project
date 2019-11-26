var express = require('express');
var controller = require('../controllers/user.controller');

var router = express.Router();

router.post('/',controller.index);
router.post('/create',controller.create);
module.exports = router;