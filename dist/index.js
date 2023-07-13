"use strict";
// Basic types
var a = 3;
console.log('A:', a);
let company = 'Apple';
let isPublished = true;
let age = 30;
let x = true;
x = 3;
//Arrays:
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'a', true];
//Tuple
let person = [1, 'Name', true,];
//any can use any type but tuple lets us specify types also order is imp, num,string,bool is ok.string,num,bool is not.
//Tuple array:
let employee;
employee = [
    ['Aditya', 12],
    ["Mom", 13],
    ["Dad", 14]
];
console.log(employee);
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
console.log(Direction1.Right);
