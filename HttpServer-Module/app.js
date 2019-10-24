const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.write('Hello World, Node.js')
        res.end();
    }
    else
    {
        res.write('Some other domain')
        res.end();
    }
})

server.listen('3000')