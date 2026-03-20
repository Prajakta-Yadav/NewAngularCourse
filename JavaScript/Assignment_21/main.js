//import { add } from "./math.js";
//console.log(add(5, 3));

// Export multiple functions

import { add, subtract, multiply } from "./utilities.js";
console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));


//Import only required function

import { add } from "./utilities.js";
console.log(add(4,6));