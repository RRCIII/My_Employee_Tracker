const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class employees extends Model {}

employees.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "employees",
  }
);

module.exports = employees;

// CREATE TABLE IF NOT EXISTS employee (
//     id INT NOT NULL PRIMARY KEY,
//     first_name VARCHAR(30) NOT NULL,
//     last_name VARCHAR(30) NOT NULL,
//     role_id INT REFERENCES role (id) ON DELETE SET NULL,
//     manager_id INT REFERNCES employee(id) ON DELETE SET NULL,
//     name VARCHAR(30) NOT NULL
// );
