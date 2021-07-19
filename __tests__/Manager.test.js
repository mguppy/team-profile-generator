const Manager = require('../lib/Manager');

//Does it return an object?
test('class manager returns an object', ()=> {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});
//Test the methods
//getNumber
test('number argument is passed successfully', ()=>{
    const officeNumber = '5015555555';
    const manager = new Manager(officeNumber, 'Maryam',12345,'mguppy34@gmail.com');
    expect(manager.getNumber()).toBe(officeNumber);
});

//getRole
test('role argument is passed successfully', ()=>{
    const role = 'Manager';
    const manager = new Manager('5015555555', 'Maryam',12345,'mguppy34@gmail.com');
    expect(manager.getRole()).toBe(role);
});