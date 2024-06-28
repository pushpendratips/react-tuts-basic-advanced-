import React from "react";

// A closure is a feature in JavaScript where an inner function has access to its outer enclosing
// function’s variables. This includes access to:

// Its own scope (variables defined between its curly brackets).
// The outer function’s variables.
// The global variables.
// A closure is created when a function is defined inside another function, and the inner function retains
// access to the outer function’s scope even after the outer function has finished executing.

// outerFunction is defined with one parameter, outerVariable.
// innerFunction is defined inside outerFunction and has access to both outerVariable
// and its own parameter, innerVariable.
// Even after outerFunction has finished executing, the inner function newFunction still
// has access to outerVariable.

// Function inside another function: Closures are created when a function is
// defined inside another function and the inner function is returned or used outside its enclosing function.
// ?Scope Chain: Closures have access to three scopes:
// ! Local scope (own scope)
// ! Outer function’s scope
// ! Global scope
// * Data Privacy: Closures can be used to create private variables or functions.
const Closures = () => {
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3

  return <div></div>;
};
// * Partial Application: Creating a function with preset arguments.
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(15);
console.log(addFive(3)); // 8

export default Closures;
