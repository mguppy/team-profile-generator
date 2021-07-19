const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

//Does it return an object?
test('class employee returns an object', ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

//Test the arguments
//Name argument 
test('name argument is passed successfully', ()=>{
    const name = 'Maryam';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

//ID argument
test('ID argument is passed successfully', ()=>{
    const id = 12345;
    const emp = new Employee('Maryam',id);
    expect(emp.id).toBe(id);
});

//Email argument
test('email argument is passed successfully', ()=>{
    const email = 'mguppy34@gmail.com';
    const emp = new Employee('Maryam',12345,email);
    expect(emp.email).toBe(email);
});

//Test the methods
//getName
test('getName method works correctly', ()=>{
    const name = 'Maryam';
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
});
//getID
test('ID argument is passed successfully', ()=>{
    const id = 12345;
    const emp = new Employee('Maryam',id);
    expect(emp.getID()).toBe(id);
});
//getEmail
test('email argument is passed successfully', ()=>{
    const email = 'mguppy34@gmail.com';
    const emp = new Employee('Maryam',12345,email);
    expect(emp.getEmail()).toBe(email);
});
//getRole
test('role argument is passed successfully', ()=>{
    const role = 'Employee';
    const emp = new Employee('Maryam',12345,'mguppy34@gmail.com');
    expect(emp.getRole()).toBe(role);
});

