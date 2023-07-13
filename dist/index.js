"use strict";
// Basic types
var a = 3;
// console.log('A:', a);
let company = "Apple";
let isPublished = true;
let age = 30;
let x = true;
x = 3;
//Arrays:
let ids = [1, 2, 3, 4, 5];
let arr = [1, "a", true];
//Tuple
let person = [1, "Name", true];
//any can use any type but tuple lets us specify types also order is imp, num,string,bool is ok.string,num,bool is not.
//Tuple array:
let employee;
employee = [
    ["Aditya", 12],
    ["Mom", 13],
    ["Dad", 14],
];
// console.log(employee);
//unions
let id = 22;
id = "12";
id = true;
//enums:named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Top"] = 10] = "Top";
    Direction1[Direction1["Bottom"] = 20] = "Bottom";
    Direction1[Direction1["Right"] = 21] = "Right";
    Direction1[Direction1["Left"] = 22] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Top"] = "Top";
    Direction2["Bottom"] = "Bottom";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
// console.log(Direction1.Right)
// console.log(Direction2.Right)
// Objects:
let user = {
    id: 55,
    name: "Saarthak",
};
let user2 = {
    id: 52,
    name: "Aditya",
};
//Type assertion:
let cid = 3;
let customerID = cid;
// OR
customerID = cid;
// Functions:
function addNum(x, y) {
    return x + y;
}
const ans = addNum(1, 2);
// console.log(ans)
// If functions do not return anything, you can use void as there data type
function printDouble(x) {
    // console.log(x * 2);
}
printDouble(21);
const ui = {
    id: 12,
    age: 13,
    name: "Hello",
};
const add = (x, y) => (x + y);
console.log(add(12, 13));
//classes:
// properties are public by default,you can make them private or protected
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(id + " " + name);
    }
}
const Wil = new Person(1987, 'wil');
const mike = new Person(2023, 'mike');
class People extends Person {
    constructor(id, name, age) {
        super(id, name);
        this.age = age;
        console.log(this.id);
    }
}
const Floof = new People(41, "Lauka", 20);
console.log(Floof.age);
console.log(Floof.name);
// Generic functions 
