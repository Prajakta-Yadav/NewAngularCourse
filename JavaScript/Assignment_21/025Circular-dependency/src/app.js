import { a } from './moduleA.js';
import { b, getA } from './moduleB.js';

console.log('App started.');
console.log('value of A:' , a);
console.log('value of B:' , b);
console.log('Value of A retrieved via B:', getA());