var express = require('express');
var router = express.Router();

var resultController = require('../controllers/resultController');
var historyController = require('../controllers/historyController');

router.get('/result/:query', resultController.ddgResult);
router.get('/history', historyController.getHistory);
router.post('/history', historyController.saveHistory);

module.exports = router;