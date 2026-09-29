//Normal function 
function add(a,b){
    return a+b;
}

add(5,6);
console.log(add(5,6),"NORMAL FUNCTION");

//Arrow function

const add1 = (a,b)=>a+b; 

console.log(add1(5,6),"ARROW FUNCTION");

//javascript 

const getPatients = async ()=>{
    //API logic
}

const sayHello=async ()=>{
    const message=await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Hi");
        },2000)
    });

    console.log(message);

}
sayHello();

//OBJECT VS JSON 

const newObj={
    name:"malli",
    age:20
}
console.log(newObj.name, "Object");

const newJson={
    "id":"1",
    "name":"mallika"
}
console.log(newJson.name, "JSON");

// JSON.stringify(object); // converts object to JSON string
console.log(JSON.stringify(newObj), "JSON STRINGIFY");

//JSON string -> Javascript object
console.log(JSON.parse(JSON.stringify(newObj)),"PARSED OBJECT");


//SPREAD OPERATOR - You want a copy with an updated age:
// Spread = take existing values and spread/copy them into another object/array.
const patient={
    name:"ayushi",
    age: 20
}; 

const updatedPatient={
    ...patient,
    age:40}

    console.log(updatedPatient,"UPDATED PATIENT");


const arr=[1,2,3,4];
const newarr=[6,7,8,9,...arr];

console.log(newarr,"NEW ARRAY");

console.log(arr.filter((item)=>item>2),"FILTERED ARRAY");

console.log(arr.map((item)=>item*3),"MAPPED ARRAY");
console.log(arr.reduce((acc,item)=>acc+item,0),"REDUCED ARRAY");

//array destructuring- object binding 

let obj={
    name:"malli",
    age:20
}

let obj2 = {
    name2:"Trisha",
    age2:30
}
for(let v in obj){
    obj2[v]=obj[v];
}

console.log(obj2,"OBJECT DESTRUCTURING", obj, "object");

let array1=[1,2,3];
let array2=[4,5,6];


console.log("ARRAY MERGE",[...array1,...array2]);

