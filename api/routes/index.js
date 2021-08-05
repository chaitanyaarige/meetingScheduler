var express = require('express');
var router = express.Router();
const appointmentController = require('../src/controllers/appointments')
const slotController = require('../src/controllers/slot')


router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentCreate', appointmentController.create);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

