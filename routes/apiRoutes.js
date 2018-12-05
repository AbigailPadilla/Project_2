var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/appointments", function(req, res) {
    dbAppointment.findAll({}).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Create a new example
  app.post("/api/appointments", function(req, res) {
    db.Appointment.create(req.body).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Delete an example by id
  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointment.destroy({ where: { id: req.params.id } }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });
};
