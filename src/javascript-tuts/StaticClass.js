// * Static class methods are defined on the class itself.
// ? You cannot call a static method on an object, only on an object class.
// ! Define and export a default class named `Names`

export class Person {
  // Constructor for defining instance properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating instances of the class
const person1 = new Person("Pushpendra", 25);
const person2 = new Person("Bob", 30);

// Accessing instance methods and properties
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 30 years old.

export default class Names {
  // Constructor method that initializes the `name` property
  constructor(name) {
    this.name = name;
  }

  // Static method that returns a string "Hello World"
  static hello() {
    return "Hello World";
  }
}

// Create a new instance of the `Names` class with the name "Pushpendra"
const newName = new Names("Pushpendra");

// Log the `name` property of the `newName` instance
console.log(newName.name); // Output: "Pushpendra"

// Log the result of the static `hello` method
console.log(Names.hello()); // Output: "Hello World"
