// Javascript is single-threaded language that means it has one call stack and one heap so it will run code line by line i.e it is syncronous by nature


// callback function will be called here . callback is also used when we want to delay some action,task
function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}

// callback function
function askQuestion() {
    console.log('How are you?');
}

// function call
greet('Saurabh',askQuestion);