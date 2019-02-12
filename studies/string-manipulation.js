                        //String Manipulation
/*
*   Strings will hold data to be read as text, and there are various ways that we can manipulate strings
*   to check the data being held.
*/

                //Building/Concatenation:
/*  Concatenating and building strings is done with the plus sign ( + ) or the plus/equals ( += )
*   To concat, or bring two separate strings together, simply use + between strings or variables that represent strings
*/

let string1 = 'I love ';
let string2 = 'gooooold';

let myString = string1 + string2; //brings the two strings together into a single string
console.log(myString); //prints the entire string of 'I love gooooold'

/*
* if we wanted to continually add new things to a single string, such as from within a loop, we can
* use the += operator as a shortcut
*/
let emptyStr = '';
while (emptyStr.length < 10) {
    emptyStr += 'Ha';
    console.log(emptyStr); //everytime this loop runs, as long as the length of emptyStr is less than 10, 
}                          //the string will be built up with Ha. This continues until the stopping condition is met

                            //String Methods:
/*
*   There are a number of methods that can be used on a string, each one performing a unique action.
*   A few of these include: String.replace(), String.concat(), String.indexOf(), String.charAt(),
*   String.endsWith(), String.includes(), and string.Split()
*/

const myStr = 'Well this is awkward, eh?';

let newStr = myStr.replace('awkward', 'awesome'); // .replace() takes two parameters, and replaces the first argument with the second
newStr.concat(' ', 'Maybe...'); //String.concat() is a method that does the same thing as the concatenation operator, building a single stirng from multiple sources
newStr.indexOf('this'); //String.indexOf() will match the argument passed and return the index position where the matched string begins.
                        //otherwise, if no match, returns -1
newStr.charAt(6); //returns the character at the index given; bracket notation could also be used
newStr.endsWith('monkey'); //String.endsWith() returns a Boolean depending on if the substring being passed as an argument is found at the end of the string
newStr.includes('this'); //searches the entire string for the subtring being passed as a match, returns a Boolean value
newStr.split(''); //returns an array of all characters split by whatever the argument is. If split by an empty string, all characters will be separated individually.
