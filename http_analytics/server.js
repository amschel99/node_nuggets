const events= require("events")
const serverEvents= new events.EventEmitter()
const http= require("http")
const httpServer= http.createServer( (req,res)=>{
    if(req.url==="/"){
    res.writeHead(200, {'Content-Type': 'text/plain'});
        serverEvents.emit('request',req.method,req.url,res.statusCode)
 
 
 res.end('Hello World\n');
    }
    if(req.url==="/about"){
         res.writeHead(200, {'Content-Type': 'text/plain'});
         serverEvents.emit('request',req.method,req.url,res.statusCode)

  
 
 
 res.end('about us');

    }
    else{
 res.writeHead(404, {'Content-Type': 'text/plain'})
     serverEvents.emit('request',req.method,req.url,res.statusCode)
     res.end('route not found');
    }
   

     



}).listen(5000,()=>console.log(`server is running`))
module.exports=serverEvents;
 
