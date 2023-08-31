const Department = require('./department');
const Employee = require('./employee');
const Role = require('./role');

//employee role relation 
Employee.hasOne(Role, {
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
 });

Role.belongsTo(Employee, {
    foreignKey: 'role_id'
});

//emplyee manager relation
Employee.hasMany(Employee, {
    foreignKey: 'manager_id',
    onDelete: 'CASACADE'
});

Employee.belongsTo(Employee, {
    foreignKey: 'manager_id'
});

//role department relation 
Role.hasOne(Department, {
    foreignKey: 'department_id',
    onDelete: 'CASCADE'
});

Department.belongsTo(Role, {
    foreignKey: 'department_id'
});


module.exports = { Department, Employee, Role }