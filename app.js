const express =require("express");

//express app

const app =express();

//register view engine
app.set('view engine','ejs');


//listen for requests
app.listen(3000);


app.get("/about",(req,res)=>{
    //res.send("<h1>this is an about page</h1>");
    res.render('about');

})
app.get("/blog",(req,res)=>{
   // res.send("<h1>hi this is an blog page</h1>");
   res.render('blog');
})
app.get("/",(req,res)=>{
    //res.send("<h1>hi there this is express app</h1>");
    const blogs = [
        {title:"food",snippet:"this is about the blog food"},
        {title:"health",snippet:"this is about the blog health"}
    ]
    res.render('index',{title:"home",blogs});
})

//redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//404 page

app.use((req,res)=>{
    res.status(404).render('404');
})