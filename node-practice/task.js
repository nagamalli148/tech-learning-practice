console.log(1);

setTimeout(()=>{
    console.log("2");
})

console.log(3);


function greet(name, callback){
    console.log("Hello", `${name}`);
    callback(); // The callback is executed here
}

function sayHi(){
    console.log("Hi");
}
//passing a function into another fun as argument - call back
greet("Alice", sayHi); 

// const app=express();
// app.get('/users',(req,res) =>{
//     res.json([{
//         id:1, name:"Malli"
//     }])
// })

debugger
const num=[1,3,4,5,5,6,7,6,6,6]

const duplicates=num.filter((value,index)=> 
        num.indexOf(value)!==index
);
console.log("DUPLICATES", duplicates);


const str="Malli";
const result=str.split("").reverse().join("");

console.log("REVERSE: "+ result);

let result1="";
for(let i=str.length-1;i>=0;i--){
    result1+=str[i];
}

console.log(result1);