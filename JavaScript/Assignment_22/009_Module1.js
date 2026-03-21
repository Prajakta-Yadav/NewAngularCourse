function createCounter() {
  let count = 0;

  function logChange() {
    console.log(`Current count: ${count}`);
  }

  return {
    increment() {
      count++;
      logChange();
    },
    decrement() {
      count--;
      logChange();
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter2.increment();
console.log(createCounter.count);