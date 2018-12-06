module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    checkin: DataTypes.DATE
  });
  return Appointment;
};
