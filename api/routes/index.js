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
router.post('/appointment/create', appointmentController.create);
router.delete('/appointment/delete/:id', appointmentController.delete);



module.exports = router;   