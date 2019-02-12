                    //Control Flow//
/*
*   We can control the flow of our program, and execute code based on what we conditions set. 
*   This is done simply through statements that resolve to a Boolean value; these statements are conditionals,
*   which include 1) if statements
*                 2) else statements
*                 3) else if statements
*                 4) switch statements
*
*   The code that is run when using these control flow methods will depend on the logic
*   that we establish.
*/

const isSaintsFan = true;
const fuckTheRefs = 'we were robbed';

if (isSaintsFan) {
    console.log('WHO DAT');
}
//the value passed in the parenthesis is the conditional, which must be true for the following code block to be run

if (isSaintsFan && fuckTheRefs.length > 0) {
    console.log('Mardi Gras is coming soon anyway');
}
//when using the logical 'and' operator in an if statement, both values must resolve to true for the code to run

//To add a default block of code in case the first one doesn't run, we can add on an 'else' statement. 
if (!isSaintsFan) {
    console.log('Go home please');
} else {
    console.log('Jeet yet?'); //this code will run if the first statement comes back falsy, else statements = default/backup
}

//To set up multiple situations with certain code blocks, you can chain else-if statements between the initial if statement and the
//else statement
let a = 42;
let b = 17;
if (a < b) {
    console.log('B!');
} else if (a === b) {
    console.log('WE ARE EVEN');
} else {
    console.log('Whats even happening now');
}

                    //Switch Statements:
/*
*   Switch statements can act as if-else if- else statement shortcuts,
*   but have a different setup. 
*/
const day = 'Wednesday';
switch(day) {
    case 'Monday':
        console.log('We\'ve got a case of the Mondays');
        break;      //A break must be used between each case+code block
    case 'Tuesday': 
        console.log('Only 3 more days until the weekend');
        break;
    case 'Wednesday':       //multiple cases can be used to flag one result
    case 'Thursday':
        console.log('We are almost there!');
        break;
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
        console.log('THE WEEKEND IS HERE');
}