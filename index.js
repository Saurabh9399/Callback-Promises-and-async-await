var promise = new Promise((resolve, reject) => {
  // resolve("Promise fullfilled successfully!");
  // reject("Something went wrong");
    setTimeout(() => {
    // If we resolve .then() will be called else if we call reject then .catch() will be called
    // resolve({ message: "success" });
      reject({ message: "error" });
  }, 3000);
});

promise
    .then((data) => {
    console.log(data);
    })
    .catch((error) => {
        console.log('error',error); 
    })
