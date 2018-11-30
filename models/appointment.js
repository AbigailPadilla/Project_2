module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    checkin: DataTypes.DATE
  });
  return Appointment;
};
