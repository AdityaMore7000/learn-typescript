// Basic types
var a: number = 3;
// console.log('A:', a);
let company: string = "Apple";
let isPublished: boolean = true;
let age: number = 30;
let x: any = true;
x = 3;

//Arrays:
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "a", true];

//Tuple
let person: [number, string, boolean] = [1, "Name", true];

//any can use any type but tuple lets us specify types also order is imp, num,string,bool is ok.string,num,bool is not.

//Tuple array:
let employee: [string, number][];

employee = [
    ["Aditya", 12],
    ["Mom", 13],
    ["Dad", 14],
];

// console.log(employee);
//unions
let id: string | number | boolean = 22;

id = "12";
id = true;

//enums:named constants

enum Direction1 {
    Top = 10,
    Bottom = 20,
    Right,
    Left,
}
enum Direction2 {
    Top = "Top",
    Bottom = "Bottom",
    Right = "Right",
    Left = "Left",
}
// console.log(Direction1.Right)
// console.log(Direction2.Right)

// Objects:
let user: {
    id: number;
    name: string;
} = {
    id: 55,
    name: "Saarthak",
};

// OR:
type User = {
    id: number;
    name: string;
};
let user2: User = {
    id: 52,
    name: "Aditya",
};

//Type assertion:
let cid: any = 3;
let customerID = <number>cid;

// OR

customerID = cid as number;

// Functions:
function addNum(x: number, y: number): number {
    return x + y;
}

const ans: number = addNum(1, 2);
// console.log(ans)

// If functions do not return anything, you can use void as there data type
function printDouble(x: number): void {
    // console.log(x * 2);
}
printDouble(21);

// Interface is like a type only but,
// type can be used with primitives as well as unions but interface cannot.

interface UI {
    id: number;
    readonly name: string; // this cannot be overwritten now
    age?:number; // ? denotes optional attributes.
}
const ui: UI = {
    id: 12,
    age:13,
    name: "Hello",
};

// interface with func
interface mathFunc{ 
    (x:number,y:number):number
}

const add:mathFunc = (x,y)=>(x+y)

console.log(add(12,13))


//classes:
// properties are public by default,you can make them private or protected
class Person {
    protected id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
        console.log(id+" "+name)
    }
}
const Wil = new Person(1987,'wil');
const mike = new Person(2023,'mike');

class People extends Person{
    age:number;
    constructor(id:number, name:string, age:number){
        super(id,name);
        this.age = age
        console.log(this.id);
        
    }
}

const Floof = new People(41,"Lauka",20);
console.log(Floof.age);
console.log(Floof.name);

// Generic functions 
