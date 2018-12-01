module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    checkin: DataTypes.DATE
  });
  return Appointment;
};
