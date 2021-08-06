var express = require('express');
var router = express.Router();
const appointmentController = require('../src/controllers/appointments')
const slotController = require('../src/controllers/slot')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotController.all);
router.post('/appointmentcreate', appointmentController.create);



module.exports = router;   