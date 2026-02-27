
/* class Person
function Person(name: any): void 
When you use new Person("Rahul"), JavaScript:

Creates a new empty object {}

Links that object to Person.prototype

Sets this to that new object

Runs the function

Returns the object

So Person is still just a normal function.

JavaScript still uses prototype-based behavior internally.

So:

Function + new ≠ converted to class
Function + new = constructor function behavior

Your Understanding	                    Correct Version
new creates class object	        new creates a new object
Function converts to class	        Function remains a function
this refers to class	            this refers to current object
Constructor becomes class	        Constructor is just a function used with new

In JavaScript:

There is:

No real class conversion

No blueprint transformation

No compile-time class system

Correct explanation:

• Person is just a normal function.
• When used with new, it behaves as a constructor function.
• new creates a new object.
• this refers to that new object.
• The new object is returned and stored in p1.
*/

function Person(name){  //This constructor function may be converted to a class declaration.
    this.name = name;     //(property) Person.name: any
}


//p1 is a new object created by the constructor function Person.
//The function Person is used as a constructor when called with new.

let p1 = new Person("Rahul");   //constructor Person(name: any): Person

console.log(p1);



/**
 * In Java:

Class → Object

In JavaScript:

Function + new → Object linked to prototype

Different mental model.



this attaches properties to the new object — not to the class.

There is no real class here.

There is only:

A function

A prototype object

A newly created object



In JavaScript:

Functions can behave in two ways:

Without new	With new
Normal function	Constructor function
this → global/undefined	this → new object
Returns undefined (if no return)	Returns new object

That is the key difference.
 */