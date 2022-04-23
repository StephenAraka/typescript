//- Basic primitive types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

//- Arrays
let ids: number[] = [1, 2, 3, 4];
let arr: any[]; // use any when you dont know what type will be innit

//- Tuple
let person: [number, string, boolean] = [1, 'Brad', true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill']
];

//- Union - variable hold more than 1 type
let prodID: string | number;
prodID = '22';
prodID = 33;

//- Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

//- Objects
const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'Steve'
}

// Objects - types
type User = {
  id: number,
  name: string
}

const user2: User = {
  id: 1,
  name: 'Steve'
}

//- Type Assertion
// <type> or 'as type'
let cid: any = 1
// let customerID = <number>cid // or
let customerID = cid as number

//- Functions
function addNum(x: number, y: number): number {
  return x + y
}

// when you dont have a return value: void
function log(message: string | number): void {
  console.log(message)
}

log('true')


//- Interface
// Use with objects - cant use unions with interfaces
interface UserInterface {
  id: number,
  name: string
}

const user3: UserInterface = {
  id: 1,
  name: 'Steve'
}

// More Properties
interface UserInterface2 {
  readonly id: number,      // readonly
  name: string,
  age?: number              // optional
}

// Interface with functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

interface PersonInterface {
  id: number
  name: string
  register(): string
}

//- Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register(): string {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad')
const steve = new Person(2, 'Steve')


// console.log(brad, steve)

// Sub-classes - extending a parent class
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const employee1 = new Employee(3, 'Chris', 'Dev')

console.log(employee1.register())

//- Generics
// useful for creating reusable functions
function getArray<T>(items: T[]): T[] {   // T = typePlaceholder
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['one', 'two', 'three'])
