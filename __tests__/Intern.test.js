const Intern = require('../lib/Intern');

//Does it return an object?
test('class employee returns an object', ()=> {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});
//Test the methods
//getSchool
test('school argument is passed successfully', ()=>{
    const school = 'Arkansas';
    const intern = new Intern(school, 'Maryam',12345,'mguppy34@gmail.com');
    expect(intern.getSchool()).toBe(school);
});
//getRole
test('role argument is passed successfully', ()=>{
    const role = 'Intern';
    const intern = new Intern('Arkansas', 'Maryam',12345,'mguppy34@gmail.com');
    expect(intern.getRole()).toBe(role);
});