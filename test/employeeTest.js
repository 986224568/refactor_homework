const employeeTest = require('ava');
const {toString} = require('../src/employee');
const {Employee} = require('../src/employee');
employeeTest('should return Domingo(manager) when new Employee given employee', t => {
    const employee = {
        name : 'Domingo',
        type : 'manager',
    };
    const e = new Employee(employee.name, employee.type);
    const result = e.toString();
    console.log(result);
    t.is(result, 'Domingo (manager)');
});

employeeTest('should return Domingo(engineer) when new Employee given employee', t => {
    const employee = {
        name : 'Domingo',
        type : 'engineer',
    };
    const e = new Employee(employee.name, employee.type);
    const result = e.toString();
    console.log(result);
    t.is(result, 'Domingo (engineer)');
});

employeeTest('should return Domingo(salesman) when new Employee given employee', t => {
    const employee = {
        name : 'Domingo',
        type : 'salesman',
    };
    const e = new Employee(employee.name, employee.type);
    const result = e.toString();
    console.log(result);
    t.is(result, 'Domingo (salesman)');
});


