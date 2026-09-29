import http from 'http';
import {addNumber} from './demomodule.js';

console.log(addNumber(2,3),"LOCAL MODULE ADD");

const myServer=http.createServer((req,res)=>{
    res.write("HEY, WRITTEN MY FIRST SERVER CREATION CODE")
    res.end()
})

myServer.listen(3100);

const mysecondserver=http.createServer((req,res)=>{
    res.write("HEY, WRITTEN MY SECOND SERVER CREATION CODE")
    res.end()
})

mysecondserver.listen(3200);
