var db = require("../models");
//David was here
module.exports = function(app) {
  // Get all examples
  app.get("/api/appointments", function(req, res) {
    dbAppointments.findAll({}).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Create a new example
  app.post("/api/appointments", function(req, res) {
    db.Appointments.create(req.body).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Delete an example by id
  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointments.destroy({ where: { id: req.params.id } }).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });
};
