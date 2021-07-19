const Engineer = require('../lib/Engineer');

//Does it return an object?
test('class engineer returns an object', ()=> {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});
//Test the methods
//getGithub
test('github argument is passed successfully', ()=>{
    const github = 'mguppy';
    const engineer = new Engineer(github, 'Maryam',12345,'mguppy34@gmail.com');
    expect(engineer.getGithub()).toBe(github);
});

//getRole
test('role argument is passed successfully', ()=>{
    const role = 'Engineer';
    const engineer = new Engineer('mguppy', 'Maryam',12345,'mguppy34@gmail.com');
    expect(engineer.getRole()).toBe(role);
});