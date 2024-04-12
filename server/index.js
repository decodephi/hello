const http= require("http")
/// start node (js file)
///its create server
const myServer =http.createServer((req,res)=>{
    console.log("New res");
    console.log(req.headers);
    res.end("Hello from server")
})

myServer.listen(8000,()=>{
    console.log("server started");
});

// You can Stop Server using ctrl+c