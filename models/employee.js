const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {}

Employee.init(
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
      references: {
        model: 'Role',
        key: 'id',
      },
    },

    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Employee",
  }
);

// Employee.create {(

// )}

module.exports = Employee;

// CREATE TABLE IF NOT EXISTS employee (
//     id INT NOT NULL PRIMARY KEY,
//     first_name VARCHAR(30) NOT NULL,
//     last_name VARCHAR(30) NOT NULL,
//     role_id INT REFERENCES role (id) ON DELETE SET NULL,
//     manager_id INT REFERNCES employee(id) ON DELETE SET NULL,
//     name VARCHAR(30) NOT NULL
// );
