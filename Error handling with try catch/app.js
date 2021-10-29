// nice about try catch is that we can handle errors without stopping the entire scripts

const user = {email: 'test@test.com'};

try {
    // myFunction();  // produce a reference error
    // null.myFunction(); // produce a type error
    // eval('hello world'); // produce a syntax error
    // decodeURIComponent('%'); // produce a URI error

    if(!user.name) {
        // throw 'user has no name';
        throw new SyntaxError('user has no name');
    }
} catch(e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
} finally {
    console.log('finally runs regardless of result.......');
}

console.log('Execution continues........');     // this will get executed instead of above error