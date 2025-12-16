//import express
const express=require('express');
const bodyParser=require('body-parser');

//obj of express to excess all the method
const app=express();

/*app.get('/',(req,res)=>{
    res.send("Hello World"); //send some respond for user
});

app.get('/blog',(req,res)=>{
    res.send("Hello blog!"); //send some respond for user
});*/

const postsRoute=require('./route/posts');
const userRoute=require('./route/user');
const imageRoute=require('./routes/images');

app.use(bodyParser.json());
//run postsRoute as a middleware
app.use("/posts",postsRoute);
app.use("/user",userRoute);
app.use("/images",imageRoute);

module.exports=app;