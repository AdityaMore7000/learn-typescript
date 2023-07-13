// Basic types
var a: number = 3;
console.log('A:', a);
let company: string = 'Apple'
let isPublished: boolean = true;
let age: number = 30;
let x: any = true;
x = 3;

//Arrays:
let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 'a', true]

//Tuple
let person: [number, string, boolean] = [1, 'Name', true,]

//any can use any type but tuple lets us specify types also order is imp, num,string,bool is ok.string,num,bool is not.

//Tuple array:
let employee: [string, number][]

employee = [
    ['Aditya', 12],
    ["Mom", 13],
    ["Dad", 14]
]

console.log(employee);
//unions
let id:string|number|boolean = 22;

id="12"
id=true

//enums:named constants

enum Direction1{
    Top =10,
    Bottom=20, 
    Right,
    Left
}
console.log(Direction1.Right)
