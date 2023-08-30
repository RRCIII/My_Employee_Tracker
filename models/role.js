const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class role extends Model {}

role.int(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
    },

    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "role",
  }
);

module.exports = role;

// CREATE TABLE IF NOT EXISTS role (
//     id INT NOT NULL PRIMARY KEY,
//     title VARCHAR(30) IS NOT NULL,
//     salary DECIMAL(10,2) NOT NULL,
//     department_id INT REFERENCES department_db(id) ON DELETE SET NULL
// );
