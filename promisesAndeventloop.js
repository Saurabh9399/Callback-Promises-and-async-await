setTimeout(function () {
    console.log(1);
}, 0);

var promise = new Promise(function (resolve, reject) {
    resolve(2);
});

promise.then(function (data) {
    console.log(data);
});

console.log(3);