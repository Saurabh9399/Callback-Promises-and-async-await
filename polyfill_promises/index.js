class CustomPromise {
  constructor(executor) {
    this.value = null;
      this.onFulfilled = null;
      this.isFulfilled = false;
      this.isCalled = false;

    const resolve = (value) => {
        this.value = value;
        this.isFulfilled = true;

        if (typeof this.onFulfilled === 'function') {
            this.onFulfilled(this.value);
            this.isCalled = true;
        }
    };

    executor(resolve);
  }

  then(cb) {
      this.onFulfilled = cb;
      if (this.isFulfilled) {
          this.onFulfilled(this.value);
      }
    return this;
  }
}

const result = new CustomPromise((resolve) => {
    resolve("Hello");   
}).then((data) => console.log(data));
