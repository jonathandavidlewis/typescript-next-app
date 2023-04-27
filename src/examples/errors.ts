// error_example.ts
interface Person {
  name: string;
  age: number;
}

class Student {
  constructor(public name: string, public age: number, public grade: number) {}
}

function getData(input) {
  // parameter doesn't have a type defined, define one, such as (input: string)
  return input;
}

let person1: Person = {
  name: "Alice",
  age: 28,
  job: "Software Developer", // the Person type DOES NOT have a "job" property, you shouldn't add one.
};

let student1 = new Student("Bob", 15, 9);
student1.height = 170; // the Person type DOES NOT have a "job" property, you shouldn't try to access it.

export { student1 };
