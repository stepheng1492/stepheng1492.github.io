                    //Functions
/*
*   Functions allow us to use certain code many times throughout our code,
*   just by using its name!
*
*   A function has two phases of being: the declaration, and the invokation. 
*       -Declaring a function is the creation of it, and invokation is calling the
*       -function into use.
*
*   Most (useful) functions have a return statement in the body, which is what is given back as a value after
*   calling/invoking/executing
*/
function            letsTalk            (strIn) {
//^function keyword    ^function name    ^parameter(s)
    console.log(strIn);
    //function body, return statements here
}
letsTalk('What a lovely evening'); //invoke/execute/call the function
        // ^argument(s)- take the place of parameter(s)

//Functions can also be assigned as variables using the assignment operator ( = )
//this feature, combined with arrow syntax, makes for very dapper functions.

const multFunc = (a, b) => a * b; //arrow syntax allows us to remove the function keyword and optionally the return keyword

function multiply(a, b) {
    return a * b;
}
multFunc(4, 6); 
multiply(12, 7);

//These functions perform the same arithmetic, but is easier to read with arrow syntax, and less to type