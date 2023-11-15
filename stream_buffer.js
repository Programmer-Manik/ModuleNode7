const http = require('http')
const fs = require('fs')


// creating a  server using raw node.js 
const server = http.createServer()
//listener 
server.on('request', (req,res)=>{
    if(req.url === '/read-file' && req.method === 'GET');
    //streaming file reading 
        const readableStream = fs.createReadStream(process.cwd()+'/text/read.txt')
         readableStream.on('data',(buffer)=>{
             res.write(buffer)
         })
         readableStream.on('end',(buffer)=>{
             res.end('hello from world ! ')
         })
})

server.listen(4000,()=>{
    console.log(`server is listening on port 4000`)
})