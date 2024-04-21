let person = {
  name : 'yk',
  age: 18
};

let hello = 'name'
console.log(person[hello]);
console.log(person['name']);
console.log(person['teacher']); //undefind

delete person.name;
console.log(person);

console.log(person.name === undefined);
console.log(person.name !== undefined);
console.log('name' in person);
console.log(['name'] in person);
// console.log(name in person);