const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function logChange() {
    console.log(`Current count: ${count}`);
  }

  // Public API
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
})();

// Usage
CounterModule.increment(); // Current count: 1
CounterModule.increment(); // Current count: 2
console.log(CounterModule.getCount()); // 2

console.log(CounterModule.count); // undefined