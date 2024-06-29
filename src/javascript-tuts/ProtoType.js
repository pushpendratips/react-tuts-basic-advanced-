import React from "react";

const ProtoType = () => {
  // Define an object `names` with a single property `name`
  const names = {
    name: "Pushpendra",
  };
  // Log the `names` object to the console
  console.log(names);
  // Output will be: { name: "Pushpendra" }

  // Define another object `add` with a single property `address`
  const add = {
    address: "Noida",
  };
  // Set the prototype (__proto__) of the `names` object to the `add` object
  names.__proto__ = add;

  // Now, the `names` object has access to properties of the `add` object via its prototype chain
  // Log the `address` property of `names` to the console
  console.log(names.address);
  // Output will be: "Noida"

  return <div>aa</div>;
};

export default ProtoType;

// Object names Definition:

// An object names is created with a property name set to "Pushpendra".
// Initial Logging of names:

// The names object is logged to the console, displaying { name: "Pushpendra" }.
// Object add Definition:

// Another object add is created with a property address set to "Noida".
// Setting the Prototype:

// The __proto__ property of the names object is set to reference the add object. This means that names will inherit properties from add.
// Accessing Inherited Property:

// The address property is accessed from the names object. Due to the prototype chain, it finds address in the add object and logs "Noida" to the console.
// In essence, setting names.__proto__ = add; makes the add object the prototype of the names object, allowing names to inherit the properties of add.
