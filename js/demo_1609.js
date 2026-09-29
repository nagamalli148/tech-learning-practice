// temporal deadzone 

// console.log(item);
// const item='';

// closures 
function greeting()
{
    console.log("this is 1st greet");
    
    return function greeting2(){
        console.log("this is second greet");
    }
//    return greeting2();
}

// //currying
// greeting()();

const greet=greeting();
console.log("GREET: ", greet);
greet();