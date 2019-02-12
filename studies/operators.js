                            //Operators//
/*
*   Operators are special symbols in JavaScript that have certain, mostly predictable, actions 
*   on variables. These symbols are divided into different categories: 
*       1) assignment operator
*       2) arithmetic operators
*       3) comparison operators
*       4) logical operators
*       5) unary operators
*       6) ternary operators
*/

            //Assignment Operator:
/*
*   The assignment operator is a single equals sign ( = ), and will initialize or (re)assign a variable. 
*   It can be thought of as a pointer, creating a reference between a name and what it's value is to be.
*   Using an assignment operator in conjunction with an aritmetic operator will perform the math and assign
*   simultaneously ( +=, -=, *=, /=, %= )
*/
let testArray = [1, 2, 3] // this creates an array, and assigns a name to it called testArray

            //Arithmetic Operators
/*
*   Arithmetic operators act upon numbers, or variables that reference numbers, and perform math!
*   These include addition ( + ), subtraction ( - ), multiplication ( * ), division ( / ), and modulo ( % )
*   
*   Modulo is an operation that will divide and return the remainder, if any, or 0. Useful for testing if a number is 
*   even or odd.
*
*   Strings can be concatenated using the plus sign!
*/
let a = 7;
let b = 9;
console.log(a - b); // will perform the math and print out -2

a = a + 14; 
a += 14; //using the += is a shortcut for doing arithmetic and reassigning simulatenously

b++; //using two plus signs will increment the number that b is referencing
b--; //two minus signs will decrement the number

console.log(14 % 2); // will print 0 as the result of the expression, because there is no remainder when 14 is divided by 2

let myName = 'Stephen';
let string1 = 'Oh hi there, ';
let string2 = ', how are you?';

let myStr = string1 + myName + string2; // myStr becomes the combination, or concatenation, of all three variables
console.log(myStr); //prints 'Oh hi there, Stephen, how are you'


                //Comparison Operators:
/*
*   Comparison operators take two values and compares them, if that's not apparent. These comparisons
*   are an expression and will evaluate to a Boolean value. The comparison operators are less than ( < ),
*   greater than ( > ), less than/equal to ( <= ), greater than/equal to ( >= ), loosely equal ( == ),
*   and strictly equal ( === ) 
*/
let x = 1;
1 === 1; //true
'1' === 1; //false
'1' == 1; //true; loosely equals will try to convert data types. DONT USE IT
42 >= x * 2; //you can compare expressions!

            //Logical Operators:
/*
*   Logical operators will help to control how data is looked at in our programs, directing control based on 
*   the logic that we implement. The operators are and ( && ), or ( || ), and inverted logic or not logic, called bang ( ! )
*/

let isSaintsFan = true;
let wereSaintsRobbed = true;

if (isSaintsFan && wereSaintsRobbed) { //the && operator will look at both variables and only run the following code block if BOTH are true
    console.log('We partied anyway!');
}

wereSaintsRobbed = false;

if (isSaintsFan || wereSaintsRobbed) { //the || operator means only ONE of the two variables has to be true for the following code to run
    console.log('That Superbowl sucked though');
}

if (!wereSaintsRobbed) { //the ! operator reverses the truthiness of the variable, running the code since !wereSaintsRobbed is evaluated to true
    console.log('WHO DAT');
}
    
                    //Unary Operators
/*
*   Unary operators have only one operand, meaning they look at only one variable at a time. 
*   These include delete, typeof, and instanceof`
*/

/*  delete will do just that, delete something. It can delete properties from an object,
*   elements from an array, and can even delete the entire object itself!
*   
*   typeof will return a string describing what type of data is being tested
*
*   instanceof will return true or false depending on if 
*/

