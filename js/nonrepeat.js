//find 1st non repetitive character 

str="NITHIN" 

// str - index compare - same value repeat 
// index position = value 
// string index value == 
// Javascript 

for(let i=0;i<str.length;i++) {
    //    j a v a s c r i p t 
    //    0 1 2 3 4 5 6 7 8 9 

    //    N I T H I N 
    //    0 1 2 3 4 5  
console.log(i);
let count=1;
for(let j=i+1;j<str.length;j++) {

    if(str[j]==str[i]){
        count++;
    }
    }
if(count==1){
    console.log(str[i],"nonrepet");
    break
}

}

// using builtin methods 

//filter, map