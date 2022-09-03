console.log('hola');
let a=12,x;
console.log(a);
var age= prompt("Age?");
const b=120;
const message = [12,23,89,90];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);