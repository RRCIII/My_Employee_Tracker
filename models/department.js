const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Department extends Model {}

Department.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "department",
  }
);


// Department.create {(

// )}.then((res) => {
//   console.log('witten to db', res);
// }). catch((err) => {
//   console.log('error when creating table')
// })




module.exports = Department;

// CREATE TABLE IF NOT EXISTS department_db  (
//     id INT NOT NULL PRIMARY KEY,
//     name VARCHAR(30) NOT NULL
// );
