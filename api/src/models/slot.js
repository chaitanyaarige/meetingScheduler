const mongoose = require('mongoose');
// model = mongoose.model.bind(mongoose);


const slotSchema = new mongoose.Schema({
  slot_time: String,
  slot_date: String,
  created_at: Date
});

module.exports = mongoose.model('Slot', slotSchema);

