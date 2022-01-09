class CustomPromise {
  constructor(executor) {
    this.value = null;
    this.onFulfilled = null;

    const resolve = (value) => {
      this.value = value;
      this.onFulfilled(this.value);
    };

    executor(resolve);
  }

  then(cb) {
    this.onFulfilled = cb;
    return this;
  }
}

const result = new CustomPromise((resolve) => {
  setTimeout(function () {
    resolve("Hello");
  }, 2000);
}).then((data) => console.log(data));
