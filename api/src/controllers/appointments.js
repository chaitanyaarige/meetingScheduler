
let Appointment = require('../models/appointment.js');
let Slot = require('../models/slot.js');
require('dotenv').config()


const Vonage = require('@vonage/server-sdk')
const { request } = require('../../app.js');
const appointmentController = {

  all(req, res) {
    Appointment.find({}).exec((err, appointments) => res.json(appointments));
  },

  create(req, res) {
    var requestBody = req.body;
    var newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save()
      .then(() => console.log('User saved properly'))
      .catch(err => console.log(err, "There was an error creating the user"));

    // Creates a new record from a submitted form
    var newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id
    });

    const vonage = new Vonage({
      apiKey: process.env.apiKey.toString(),
      apiSecret: process.env.apiSecret.toString()
    })

    let msg = requestBody.name + " " + "this message is to confirm your appointment";


    newappointment.save((err, saved) => {
      console.log(saved, "saved")

      // Appointment.find({ _id: saved._id })
      // .populate("slots")
      // .exec((err, appointment) => res.json(appointment));

      const from = "Vonage APIs"
      // const from = "918886142522"
      const to = "918008568626";
      const text = msg;

      vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
          } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
        }
      })


    }).then(() => console.log('User saved and sent SMS properly'))
      .catch(err => console.log(err, "There was an error sending SMS to user"))
  }
};
module.exports = appointmentController;