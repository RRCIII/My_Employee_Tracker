const Department = require('./department');
const Employee = require('./employee');
const Role = require('./role');

 Employee.belongsTo(Department, {
    foreignKey: 'department_id',
 });


module.exports = { Department, Employee, Role }