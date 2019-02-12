                    //Loops//
/*
*   Loops are structures that allow us to execute a block of code a certain number of times, depending on the starting and stopping 
*   conditions that we set. A loop MUST hit the stop condition, or else an infinite loop will occurr and crash the application or webpage.
*
*   Loops are also how we iterate through objects and arrays to be able to look at each element of the data structure, and
*   execute code a certain number of times, depending on the number of iterations. The loops most commonly used are
*   1) for-loops
*   2) for-in-loops
*   3) while loops
*
*   --do-while loops are also an option--
*/

            //For-Loops:
/*
*   For loops are used to iterate through an array, usually from the beginning, to gain access
*   to each index and its value. They can also be an alternative to a while loop.
*/
let array = [1, 2, 3, 4, 42];
for (let index = 0;          index < array.length;    index++) {
       //^starting condition     ^stopping condition     ^incrementor
        console.log(array[index]);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//for the first iteration, we set the index to zero, to look at the first element of an array.
//setting the stopping condition to be less than array.length will allow us to go through to the end of array
//the incrementor increases the index token number by one, but could be more if that's what we wanted

for (let i = array.length-1; i > -1; i--) {
    console.log(array[i]);
}

for (let i = 15; i > -1; i--) {
    console.log(i);
}
//we can also loop backwards through an array by setting the start condition to be the last position, 
//  telling the loop to stop once zero is the last iteration,
//  then setting the incrementor to decrement by one

            //For-In Loops:
/*
*   A for-in loop allows us to access all the key:value pairs in an object
*/

const dinner = {
    isPizza: true,
    waitTimeMins: 15,
    isItDelivery: 'No, it\'s DiGiorno!'
};
for (var key in dinner) {
    console.log(key); //prints each key in the object
    console.log(dinner[key]); //prints each value at each key
}

            //While Loops:
/*
*   While loops only set a stop condition, the incrementor must be in the code block
*/
let a = 99;
while (a > 0) {
    console.log('Still going');
    a--; //decrements a until the stop condition is met
}

                //Do-While Loops:
/*
*   A do-while loop will run a block of code one time, then initiate the loop
*/
let result = '';
let jokerLaugh = 'HaH';
do {
    result += jokerLaugh + '\n';
    console.log(result);
} while (result.length < 25);