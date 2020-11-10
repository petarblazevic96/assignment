var express = require('express');
var router = express.Router();

var result_controller = require('../controllers/result_controller');
var history_controller = require('../controllers/history_controller');

router.get('/result/:query', result_controller.ddg_result);
router.get('/history', history_controller.get_history);
router.post('/history', history_controller.save_history);

module.exports = router;