const http=require('http');
const fs=require('fs');

// Server
const server=http.createServer((req,res)=>{
res.end('Hello from server');
})
server.listen(5000,'127.0.0.1',()=>{
    console.log("Server Started");
})
