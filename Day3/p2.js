const http=require('http');

const server = http.createServer((req,res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="background-color: red; color: blue;">Helo Everyone</h1>');
});

server.listen(7000,(err)=>{
    if (err){
        console.error(err);
    }
    else{
        console.log('server is running in port 900');
    }
})