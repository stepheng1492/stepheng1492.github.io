/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

                //Var, Let, Const and Hoisting:
/*
*   With the advent of ES6, let and const were introduced to deal with some of the shortcomings of the var keyword.
*   The use of var establishes a variable that is available in the global scope, no matter where it is declared. This can sometimes be
*   a problem when you use many variables and might accidentlly reuse the same name. In this case, the variable will be reassigned and the old 
*   data will have lost its reference.
*
*   When using let, the variable is declared as a block scoped, or function scoped, variable. It is hoisted to the top of its scope
*   and it is only available for use/reference within the function or code that it is declared in. 
*
*   The const keyword declares a variable that is hoisted to the global scope, but can not be altered. 
*
*   Generally, declare all variables using let and any function declarations can be used with const
*/
let ourScope = 'I\'m not there...';

const someFunction = () => {
    let ourScope = 'I\'m here!';
    console.log(ourScope);
};

console.log(ourScope); //will log the first string, 'Im not there...', since that is the only available value at that reference
someFunction(); //calling the function created will bring us into the scope of the function, where the second string is available for reference.