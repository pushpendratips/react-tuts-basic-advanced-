import React from "react";

// ! Variable declarations (var) are hoisted and initialized with undefined.
// Function declarations are hoisted with their entire function definition.
// * Variables declared with let and const are hoisted but not initialized,
// ? leading to a temporal dead zone until the declaration is encountered.

const Hoisting = () => {
  //   console.log(name); // !undefind
  //   var name = "Pushpendra";
  //   console.log(name);

  //   console.log(name); // !ReferenceError: y is not defined
  //   let name = "pushpendra";
  //   console.log(name);

  //   console.log(name); // !ReferenceError: y is not defined
  //   let name = "pushpendra";
  //   console.log(name);

  // *  Function declarations are also hoisted to the top of their scope,
  //  * which means you can call a function before you declare it in the code.

  //   console.log(myfun()); // ! Function Hoisting
  //   function myfun() {
  //     return "Pushpendra";
  //   }

  //   console.log(myfun("Puhpendra", "Noida")); // ! Function Hoisting
  //   console.log(myfun("Tripti", "Delhi")); // ! Function Hoisting
  //   function myfun(name, address) {
  //     return name + " " + address;
  //   }

  return <div></div>;
};

export default Hoisting;
