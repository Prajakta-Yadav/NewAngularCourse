console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

//Microtask: Promise callbacks
//Macrotask: setTimeout, setInterval

/**
 * Q. 15 Event loop
 *  Restaurant Waiter Analogy
● Customer orders food → request sent
● Chef prepares food (async task)
● Waiter serves other customers meanwhile
● When food ready → waiter delivers
This is like JavaScript event loop handling async tasks without blocking
 */