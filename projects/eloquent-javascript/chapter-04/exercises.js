////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a range function that takes two arguments, start and end, and returns an 
array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of 
these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third 
argument that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to 
the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) 
produces [5, 4, 3, 2].
*/
function range(start, end, step) {
  let rangeArr = [];
  if (start === end) {
    return rangeArr;
  } else if (step > 1) {
    for (let i = start; i <= end; i+= step) {
      rangeArr.push(i);
    }
  } else if (step < 0) {
    for (let k = start; k >= end; k--) {
      rangeArr.push(k);
    }
  }
  
    else {
      for (let j = start; j <= end; j++) {
      rangeArr.push(j);
    }
  } 
  return rangeArr;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i-- ) {
    reversed.push(array[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
// 1) I know I need to loop through the array. But before figuring out where to 
  //start or end I need to think about how I will actually reverse the elements in the array.
// 2) The only way I can think to do this is to switch the first element with 
  //the last element, then the second element with the second-to-last element, etc., until I reach the middle.
  
for (let i = 0; i < Math.floor(array.length / 2); i++) {
  let first = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = first;
}
return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
which takes an element and a list and creates a new list that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the list 
(with zero referring to the first element) or undefined when there is no such element.
*/
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i > -1; i--) {
    list = {value: array[i], rest: list};
    // console.log(list);
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
    let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
