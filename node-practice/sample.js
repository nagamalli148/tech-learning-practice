import path from 'path';
//BASIC 
// console.log("Hello World");

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3),"ADDITION"); 

// const os=require('os'); 
// console.log(os.type());
// console.log(os.version());
// console.log(os.cpus());

// console.log(path.dirname(import.meta.filename));
import fs from 'fs';

// const fs=require('fs');
fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data); 
})

fs.writeFile('demo.txt',"contentSample",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File written successfully");
    }
})

fs.unlink('demo.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File deleted successfully");
    }
}) 
