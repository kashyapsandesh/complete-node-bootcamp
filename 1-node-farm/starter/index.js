const http=require('http');
const url=require('url');
const fs=require('fs');



// Server
const server=http.createServer((req,res)=>{

const pathname=req.url;
if(pathname==='/'||pathname==='/overview'){
    res.end("I am in Overview page");
}else if(pathname==='/product'){
    res.end("I am in Product page");
}else{
    res.writeHead(404,{
        'content-type':'text/html',
        'my-own-header':'hello-world',
    })
    res.end('<h1>Page Not Found</h1>')
}
console.log(pathname);




})
server.listen(5000,'127.0.0.1',()=>{
    console.log("Server Started");
})
