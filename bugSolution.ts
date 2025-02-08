function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else if (Array.isArray(person)) {
    return "Hello, " + person.join(', ');
  } else {
    return "Hello, unknown person";
  }
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";

console.log(greeter(user)); //Corrected Output
console.log(greeter(user2));//Corrected Output