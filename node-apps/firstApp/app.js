const http = require('http')

const server = http.createServer(function(req,res){
    if(req.url==='/'){
        res.write('hello bro')
        res.end();
    }
})

// server.on('connection',(socket)=>{
//     console.log('connection established')
// })

server.listen(3000)

console.log('listening on port 3000')