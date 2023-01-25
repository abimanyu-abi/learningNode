const http = require("http");
const fs = require("fs");

const server=http.createServer((req,res)=>{
     //set header content type
     res.setHeader("Content-Type","text/html");
     // read file form "./views/index.html"
     fs.readFile("./views/index.html",(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
     })
     
});

server.listen(3000,"localhost",()=>{
    console.log("listening for requests on port 3000");
})

