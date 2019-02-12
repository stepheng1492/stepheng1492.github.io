                         /* Data Types
                         */

/*
* There are two types of data structures in JavaScript, simple (primitive) data
* and complex data.
*/

                    //Simple Data Types//

/*
* Simple data types have a definite size (maximum of 8 bytes), are immutable,
* and can be acted upon with operations such as addition.
* 
* There are a few kinds of simple data types:
*  1) Numbers (integers or decimals)
*  2) Strings
*  3) Booleans
*/
let myNum = 4;

let decNum = 4.29;

let thisBool = false;

let newStr = 'Hello World';

                            //Numbers:
/*  Numbers in JS are just like numbers in math; they can be acted upon by operations
*   such as addition, subtraction, multiplication, division, and modulo.
*/
let division = myNum / 2; //divides myNum by 2 to yield 2
    decNum *= 7; //reassigns decNum to be the result of multiplying the original decimal by 7
let sum = decNum + division;

// Modulo
// the modulo operation (%) will divide two numbers and return the remainder, if anything is left over
let isEven = 2 % 2; // returns 0 because there is no remainder. This operation is great for testing odd or even


                            //Strings: 
/*   Strings are characters of any combination that are wrapped in single '' or
*   double " " quotes, to be read by the computer as literal text.
*   It is possible to see exactly how many characters are in a string datatype
*   by using the .length property.
*   Because strings are zero-indexed (the first character is zero, second is 1, third is 2,...)
*   you can access any character at a specified index, if it exists.
*/
let testStr = 'Hello there, everyone!';
    testStr[3] === 'l';
//testStr at the third index is the fourth character 'l'
/*
*   There are some special cases when using strings, like escape characters. 
*   If you wanted to use a backslash in a string, you would have to escape it first by using another backslash,
*   because they are also used to denote a special action, like a new line (\n)
*   or a tab (\t). 
*   Likewise, in order to use quotes inside of a string, you would need to use the escape feature
*   to tell the interpreter that the following characters are to be read as text, not opening/closing quotes.
*/
let myNewStr = 'This is a single \'quote\' inside a single quote';
myNewStr = 'This is a \'single\' quote on a \nnew line.';
myNewStr = 'Double "quotes" inside single quotes works too!'; //Alternating quotes also works, as long as the opening and closing are the same.

                                  //Booleans:
/*   Booleans are the third simple data type, and are simply true or false, 0 o 1, yes or no.
*  These usually come about from value comparisons and create computer logic or execute code
*   based on which Boolean the comparison resolves to, but can also be set as a value itself.
*/
const saintsFansAreTheBest = true;
    if (saintsFansAreTheBest) {
        console.log('Who Dat!');
    }
    
    
                              //Complex Data Types//
/*
*   Complex data types are the ones that are mutable, meaning their values can be changed. They also collect
*   data, so they have no definite size. These include arrays, objects, and functions.
*/

                                //Arrays:
/*
* Arrays are created using square bracks [ ], are zero indexed, meaning the first element is 0, second is 1, third i 2, etc...
* Arrays can hold any of the other data types as an element and is nothing more than a box of items, in no particular order,
* for storing data. Each element within the array is separated using a comma ( , )
* 
* Accessing arrays is done by bracket notation [index] 
*
* There are a number of different array methods that take different actions on the elements,
* such as .push(), .pop(), .shift(), .unshift(), .splice()
*/
let myArray = [1, 2, 3, false, {}, ''];

    let popped = myArray.pop(); // .pop() removes the last item from the array, and returns that item.
   
    myArray.push('to the end!'); // .push(value) will take some value and push it to the end of the array.
   
    console.log(myArray); //[..., 'to the end!'] will be printed.
    
    let shifted = myArray.shift(); // shifted = 1; the .shift() method removes the first item and returns it.
    
    myArray.unshift(42, 12, true); // .unshift() will place the input value at the beginning of the array.
    
    let elem = myArray[3]; //elem will be referencing the array at index 3, which is the fourth element.
    
                                //Objects:
/*
*   Objects are identified by their curly braces { }, and its contents are made of key:value pairs.
*   An object's key:value pairs are usually descriptive of each other, or properties that the object contains
*   that correspond to a value. Each key:value pair is separated by a colon ( : ), 
*   and each property is separated by a comma
*   The keys are all technically strings, but as a key, they don't need to be wrapped in quotes.
*   The values that each key points at can, similarly to arrays, be any data type.
*
*   Objects can be accessed using bracket notation, but dot . notation is also an option!
*/

let catObj = {
  key1: 'value', //keys and values separated by colon
  name: 'Nyxi', //each property separated by comma
  coatColor: 'black and white',
  isMean: false, //values can be any kind of data
  noise: console.log('Meowowowowowowo') 
};

console.log(catObj['coatColor']); //prints 'black and white'
console.log(catObj.name); //prints 'Nyxi'

// Using dot notation, you can also add new key:value pairs to your object

catObj.isAdopted = true; // will create a new key:value pair, assigning the value of true to the property of isAdopted

//Technically, in JavaScript, everything is an object!

                            //Functions:
/*
*   Functions are constructs that allow us to run blocks of code multiple times without having to recode something multiple times.
*   Each function is made of the function declaration, optional input as parameters, and a function body.
*
*   A function that does not have a return in the body will not actually do anything other than alter some value(s).
*
*   In order for a function to be useful, the function must be called. This can be done in several ways, even having a function 
*   call itself! (this is called recursion)
*
*/

// function someName (parameter1, parameter2) { // parameters are just placeholders, the blueprints, of the input values
//     function body-do-something-here;
//     return;
// }
// someName(arg1, arg2) // when calling a function, arguments take the place of parameters

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(40, 19)); //calling the add function with 40 and 19 as arguments, the function will return the result of the addition = 59

        // Arrow Syntax
/*
*   Arrow syntax is a feature of ECMAScript 6, or ES 6, which cleans up the way a function is written, 
*   allowing it to be more clear, concise, and have less characters!
*/
const addition = (a, b) => a + b;
console.log(addition(23, 4)); // this function is identical to the add function created earlier!

        //Pure vs. Impure Functions:
/*
*
*/
        //Higher Order Functions:
        
        
        
        
                    // Undefined, Null, NaN - 'Simple' Data
/*
*   These three values are actually a representation of some value that is falsy, or a value that is not present.
*   The falsy values are considered to be simple or primitive data types, but they are separated from above because they represent the lack of data,
*   rather than the presence of it.
*   
*   Undefined - will occur when some variable has been declared, but not initialized to any kind of value. The reference is there,
*   but not pointing at anything.
*
*   Null - when there is no reference available, an error will be thrown. This error is a ReferenceError but can be displayed as null.
*
*   NaN - is what is thrown when the reference is expecting a value to be a number, but turns out not to be. 
*/
let bowser;
console.log(bowser); //prints undefined to the console
                     //because there is no defined value to that reference, but the reference exists.
//console.log(owser); //Reference error, there is nothing available in the code that is 'owser', so it's null.
bowser = 'King of Koopas';

// console.log(bowser / 3;) //becauses this expression is invalid, it breaks the code. it has to be commented out
// because of the divison operation, the interpretor expects bowser to reference some number. When it doesn't, NaN is thrown.

                    //Infinity and -Infinity
/*
*   Infinity in JavaScript is the same as the math infinity, it is greater than any other number. Any positive number multiplied by
*   infinity equals infinity, and any positive number divided by infinity is 0.
*   Infinity initially starts at Number.POSITIVE_INFINITY
*
*                   //Infinity Behavior
*
*   Any positive value, including POSITIVE_INFINITY, multiplied by POSITIVE_INFINITY is POSITIVE_INFINITY.
*   Any negative value, including NEGATIVE_INFINITY, multiplied by POSITIVE_INFINITY is NEGATIVE_INFINITY.
*   Any positive number divided by POSITIVE_INFINITY is positive Zero.
*   Any negative number divided by POSITIVE_INFINITY is negative Zero.
*   Zero multiplied by POSITIVE_INFINITY is NaN.
*   NaN multiplied by POSITIVE_INFINITY is NaN.
*   POSITIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is NEGATIVE_INFINITY.
*   POSITIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY.
*   POSITIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
*
*               //-Infinity (Negative infinity)
*   Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
*   Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
*   Any positive value divided by NEGATIVE_INFINITY is negative zero.
*   Any negative value divided by NEGATIVE_INFINITY is positive zero.
*   Zero multiplied by NEGATIVE_INFINITY is NaN.
*   NaN multiplied by NEGATIVE_INFINITY is NaN.
*   NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
*   NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
*   NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
*/

            // Copy by Value vs Copy by Reference
/*
*   Primitive data types are copied and used in code by value, whereas complex data types are copied by reference.
*
*   In the case of complex data, two variables referencing the same data structure can both change the values of the reference.
*   Each variable has access to that information because they are just pointing at the info.
*
*   Simple data is copied by value, so each reference point creates a new spot in memory for the data, but does not change 
*/
