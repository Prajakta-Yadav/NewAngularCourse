// src/app.js
import math from './math.js';

console.log(math.add(10, 5)); 

// PROBLEM: Even though we didn't use 'subtract' or 'multiply', 
// they often stay in the final bundle because they are part 
// of the "math" object.