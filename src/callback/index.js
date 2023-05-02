function sum(num1, num2) {
  return num1 + num2;
}
function rest(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, mult));

setTimeout(greetings, 1000, "Santy");

function greetings(name) {
  console.log(`Hí out there 👋, I'm ${name}`);
}

export function execCallback(callback, time) {
    setTimeout(callback, 3000, time)
  }
  
  function logSomething(time) {
    console.log(`I'm logging something in console :) and it last ${time} miliseconds`)
  }
  
execCallback(logSomething, 2000)