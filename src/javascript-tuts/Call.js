import React from "react";
import { person, person1, person2, person3 } from "./person";

// Define a React functional component named Call
const Call = () => {
  // Define an object `main` with a method `full`
  const main = {
    // The `full` method returns a string combining `fName`, `lName`, and `address` from its context (`this`)
    full: function (phone) {
      return this.fName + " " + this.lName + " " + this.address + " " + phone;
    },
  };

  // Define an object `person` with properties `fName`, `lName`, and `address`
  //   const person = {
  //     fName: "Pushpendra",
  //     lName: "Tripathi",
  //     address: "Noida",
  //   };

  // Define another object `person1` with properties `fName`, `lName`, and `address`
  //   const person1 = {
  //     fName: "Anmol",
  //     lName: "Tripathi",
  //     address: "Delhi",
  //   };
  // Use the `call` method to invoke `main.full` with `person1` as the context (`this`)
  const data = main.full.call(
    person3.map((res) => console.log(res)),
    8448950130
  );
  // The result is the string "Anmol Tripathi Delhi"
  console.log(data); // Output: "Anmol Tripathi Delhi"

  // Return a div element containing the result
  return <div>{data}</div>;
};

// Export the Call component as the default export
export default Call;

// Component Definition:

// The Call component is a React functional component.
// Object main:

// Contains a method full that returns a string combining the fName, lName, and address properties from its context (this).
// Objects person and person1:

// Both objects have properties fName, lName, and address, with different values.
// Method Invocation with call:

// The main.full method is called with person1 as its context using call, resulting in the string "Anmol Tripathi Delhi".
// The result is stored in the data variable and logged to the console.
// Return Statement:

// The component returns a div element that displays the data.
// Export:

// The Call component is exported as the default export of the module.
