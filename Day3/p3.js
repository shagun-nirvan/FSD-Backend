const http = require('http');
const fs = require('fs/promises');
const server=http.createServer(async (req,res)=>{
    const data = await fs.readFile("./index.html");
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(data);

});

server.listen(8000,(err)=>{
    if (err){
        console.error(err);
    }
    else{
        console.log('server is running in port 900');
    }
});
