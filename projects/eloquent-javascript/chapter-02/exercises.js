
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
  let triangleStr = '';
  for (let i = 0; i < input; i++) {
    triangleStr += '#';
    console.log(triangleStr);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else console.log(i);
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(input) {
  //two loops
  //first handles each new line
  //second handles each character
  //build a string so to look like '# # # '
  //                               ' # # # '
  //                               '# # # '
  //                               ' # # # '
let grid = '';

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    if ((i + j) % 2 == 0) {
      grid += ' ';
    } else {
      grid += '#';
    }
  }
  grid += "\n";
}

console.log(grid);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}