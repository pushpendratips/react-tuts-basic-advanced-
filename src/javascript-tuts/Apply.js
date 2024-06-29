import React from "react";

const Apply = () => {
  // The apply method is similar to the call() method. The only difference is that,
  // call() method takes arguments separately whereas, apply() method takes arguments as an array.

  const person = {
    // An object `person` with a method `fullName`
    fullName: function (address, phone) {
      // This function takes two arguments: `address` and `phone`
      // It returns a string combining the `firstName` and `lastName` from the context (this),
      // and the provided `address` and `phone`
      return this.firstName + " " + this.lastName + " " + address + " " + phone;
    },
  };

  const person1 = {
    // Another object `person1` with properties `firstName` and `lastName`
    firstName: "Pushpendra",
    lastName: "Tripathi",
  };

  // Using `apply` to call `person.fullName` with `person1` as the context (`this`)
  // and the array `["noida", "844895130"]` as the arguments
  console.log(person.fullName.apply(person1, ["noida", "844895130"]));
  // This will output "Pushpendra Tripathi noida 844895130" to the console

  // The person object has a method fullName that returns a formatted string using its
  // context's firstName and lastName properties, along with the provided address and phone.
  // The person1 object provides the firstName and lastName.
  // The apply method is used to call person.fullName with person1 as the context (this),
  // and ["noida", "844895130"] as the array of arguments for the function.
  // The console logs the result: "Pushpendra Tripathi noida 844895130".

  return <></>;
};

export default Apply;
