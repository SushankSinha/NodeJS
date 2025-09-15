const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode(200);
    res.setHeader('Content-Type','text/plain');
    res.end("Hello Sushank")
});

const hostname = '127.0.0.1';
const port = 3000;

// http.

function loop(){
    for(let i=0;i<100;i++);
}

loop();

server.listen(port, hostname, ()=>{
    console.log(`Server is running on ${hostname} on port ${port}`)
})

process.on('SIGTERM', ()=>{
    server.close(()=>{
        console.log('Server Disconnected')
    });
});
