/*Hoisting is JavaScript's behavior where declarations are processed before code execution. 
var is initialized as undefined, while let and const remain in the temporal dead zone 
until their declaration is reached.*/

//temporal dead zone
// console.log(a);
// let a=50;

//var is hoisted and initialized as undefined
console.log(b);
var b=50;

//A constructor is a method used to initialize a newly created object.

class User {
    constructor(name){
        this.name=name;
    }
}
const user=new User("John"); 

//recursion is a process in which a function calls itself directly or indirectly. 
// The corresponding function is called a recursive function.
function count(n){
    if(n==0) return;
    console.log(n);
    count(n-1);
}
count(5); 

//React Component Life Cycle 
// Mounting: The phase in which the component is being created and inserted into the DOM.
// Updating: The phase in which the component is being updated due to changes in props or state.
// rendering: The process of generating the virtual DOM and updating the actual DOM based on changes in state or props.
// Effects : Side effects are operations that can affect other parts of the application or have an impact outside the function's scope. 
// In React, side effects are typically handled using the useEffect hook.

//Virtual DOM is a lightweight representation of the actual DOM in memory.
