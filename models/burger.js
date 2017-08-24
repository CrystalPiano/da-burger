module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Devoured: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
  });
  return Burger;
};