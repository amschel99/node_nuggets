const server= require("./server")


    server.on("request",(method,url,status)=>{


    
    
        console.log(`the client made a ${method} request to ${url} and the server responded with ${status} status`)
   
})