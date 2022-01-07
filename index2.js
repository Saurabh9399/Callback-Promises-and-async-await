// Javascript is single-threaded language that means it has one call stack and one heap so it will run code line by line i.e it is syncronous by nature. it has one queue or callback queue/task queue.


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
greet('Saurabh', askQuestion);

// Event loop : It constantly checks if call stack is empty and as soon as it becomes empty it will check for callback queue and start dequeing it and push it to call stack and execute it.