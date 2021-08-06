const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new mongoose.Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  slots: { type: ObjectId, ref: 'Slot' },
  created_at: Date
});
module.exports = mongoose.model('Appointment', appointmentSchema);
