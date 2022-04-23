"use strict";
//- Basic primitive types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
//- Arrays
let ids = [1, 2, 3, 4];
let arr; // use any when you dont know what type will be innit
//- Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
//- Union - variable hold more than 1 type
let prodID;
prodID = '22';
prodID = 33;
//- Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//- Objects
const user = {
    id: 1,
    name: 'Steve'
};
const user2 = {
    id: 1,
    name: 'Steve'
};
//- Type Assertion
// <type> or 'as type'
let cid = 1;
// let customerID = <number>cid // or
let customerID = cid;
//- Functions
function addNum(x, y) {
    return x + y;
}
// when you dont have a return value: void
function log(message) {
    console.log(message);
}
log('true');
const user3 = {
    id: 1,
    name: 'Steve'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//- Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const steve = new Person(2, 'Steve');
// console.log(brad, steve)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee1 = new Employee(3, 'Chris', 'Dev');
console.log(employee1.register());
