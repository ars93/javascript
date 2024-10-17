function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person1 = new Person('Alice')
person1.greet() // Hello, my name is Alice

// Inheriting the prototype chain
function Employee(name, role) {
  Person.call(this, name) // Call Person constructor
  this.role = role
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

Employee.prototype.describe = function () {
  console.log(`${this.name} is a ${this.role}`)
}

const employee1 = new Employee('Bob', 'Developer')
employee1.greet() // Hello, my name is Bob
employee1.describe() // Bob is a Developer

// JavaScript uses prototype chains to achieve inheritance. Every object in JavaScript has a __proto__ property that points to its prototype object.
