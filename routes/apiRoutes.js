var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/appointments", function(req, res) {
    db.Appointment.findAll({}).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Create a new example
  app.post("/api/appointments", function(req, res) {
    db.Appointment.create({
      name: req.body.patientName,
      phone: req.body.patientPhone,
      checkin: req.body.patientCheckin
    }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
    //Send Message
    const accountSid = "ACf442a8a142036fbd30e8ec611ee1c3cf";
    const authToken = "8637726fecad4c94dec242a2da4efa09";
    const client = require("twilio")(accountSid, authToken);
    const waitime = Math.floor(Math.random() * 15 + 15);
    client.messages
      .create({
        body: "Your appoinment has been confirmed. Your estimated wait time is " + waitime + " minutes.",
        from: "+16193320116",
        to: req.body.patientPhone //"+16199931325"
      })
      .then(message => console.log(message.sid))
      .done();
  });

  //Delete an example by id
  // app.delete("/api/appointments/:id", function(req, res) {
  //   db.Appointment.destroy({ where: { id: req.params.id } }).then(function(dbAppointments) {
  //     res.json(dbAppointments);
  //   });
  // });
};
