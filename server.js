const http = require("http");
const fs = require("fs");
const { defaultMaxListeners } = require("events");

const server=http.createServer((req,res)=>{
     //set header content type
     res.setHeader("Content-Type","text/html");

     let path ="./views/";
     switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='404.html';
            break;
     }


     // read file form "./views/index.html"
     fs.readFile(path,(err,data)=>{
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

