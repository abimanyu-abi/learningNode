const express =require("express");

//express app

const app =express();


//listen for requests
app.listen(3000);


app.get("/about",(req,res)=>{
    //res.send("<h1>this is an about page</h1>");
    res.sendFile("./views/about.html",{root:__dirname});

})
app.get("/blog",(req,res)=>{
   // res.send("<h1>hi this is an blog page</h1>");
   res.sendFile("./views/blog.html",{root:__dirname});
})
app.get("/",(req,res)=>{
    //res.send("<h1>hi there this is express app</h1>");
    res.sendFile("./views/index.html",{root:__dirname});
})

//redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//404 page

app.use((req,res)=>{
    res.status(404).sendFile("./views/404.html",{root:__dirname});
})