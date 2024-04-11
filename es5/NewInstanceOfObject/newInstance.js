// usage of new to create js object instances
class Child {
  constructor(age, location) {
    this.age = age;
    this.location = location
  }
}

// the new keyword at work

const Mark = new Child('Five years,', 'St. Peters Area,');
const Brian = new Child('Seven years,', 'Karibu Estate,');

console.log(Mark.location);
console.log(Brian.age, Brian.location);