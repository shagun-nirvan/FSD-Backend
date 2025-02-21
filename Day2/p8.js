const http = require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('helo wolerd');

});

server.listen(9000,(err)=>{
    if (err){
        console.error(err);
    }
    else{
        console.log('server is running in port 900');
    }
})