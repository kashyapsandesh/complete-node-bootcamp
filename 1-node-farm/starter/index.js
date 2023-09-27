//importing file system module
const fs=require('fs');
//File system module using synchronous way which block the code
 
//readFileSync method help to read the content of file and utf-8 make ease to decode in human readable format.
// const readfile=fs.readFileSync('./txt/input.txt','utf-8');
// console.log(readfile);

// const writeToFile=`Hey this is sandesh and learning backend from ${Date.now().toLocaleString}`;
// fs.writeFileSync('./txt/start.txt',writeToFile)


// Using Asychronous way
const readfile=fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    if(err) console.log('🥹🥹')
fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
   fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
    console.log(data3);
    fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',(err)=>{
console.log("Data added sucessfully")
    })
   })
})
})