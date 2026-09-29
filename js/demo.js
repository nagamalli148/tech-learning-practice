class Demo {
    constructor() {
        console.log("Demo component initialized.");
    }
}
let s=new Demo();
console.log(s); 

let a = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(a.name, a["name"]); // Output: John 


// Arrow Functions 
// Call backs 
// Promises 

const obj={
    name:"malli",
}
obj.age=20;

console.log(obj,"OBJECT");

const arr=[1,2,3,4];
arr.push(2);
console.log(arr);

// FUNCTIONS 

function add(){
console.log("it is addition");
}

function add1(a=5,b=6){
const sum=a+b;
return sum;
}
console.log(add1(),"ADD");

//ES6
const order=(a=5,b=4)=>a+b;
console.log(order(),"ORDER");
