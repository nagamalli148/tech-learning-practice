// // console.log("A");

// // setTimeout(() => {
// //     console.log("B");
// // }, 0);

// // Promise.resolve().then(() => {
// //     console.log("C");
// // });

// // console.log("D");

// // const arr=[1,2,3,4,5,6]

// //reverse a string without builtin
// let str="Hello";
// function reverse()
// {
//     let revstr=""
//     for(let i=str.length-1;i>=0;i--)
//     revstr+=str[i]
//     return revstr;
// }
// let result=reverse(); 
// console.log(result); 

// //reverse a string with built in 
// let str1="Java";
// let characters=str1.split("");
// let reversechar=characters.reverse();

// let result1=reversechar.join("");
// console.log(result1);

//Find FindDuplicates
let FindDuplicate="Javascript";
for(let i=0;i<FindDuplicate.length-1;i++)
    {
    for(let j=i+1;j<i;j++)
    
    if(FindDuplicate[i]===FindDuplicate[j])
    console.log(FindDuplicate, "FindDuplicates");
}
let duplicates=FindDuplicate[i];


console.log(duplicates)