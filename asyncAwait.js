// var promise = new Promise(function (resolve, reject) {
//     resolve('Resolved');
// });

// promise.then(data => console.log(data));


// // shorthand for above
// Promise.resolve('Resolved').then(data => console.log(data));

// // async await
// async function asyncTask() {
//     return "Resolved";
// }

// asyncTask.then(data => console.log(data));

function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData();

    console.log(data);
}

abc();

console.log('1');

// 1) javascript suspends the async await function
// 2) wait for promise to return 
// 3) javascript executes code syncronously