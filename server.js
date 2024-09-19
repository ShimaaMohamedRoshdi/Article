const express=require("express");
const dbConnection=require("./database/dbConnection")
const articleRoutes=require("./routes/articleRoutes")
require('dotenv').config({path:'./config/config.env'})
const app=express()
app.use(express.json());


app.use('/api/articles',articleRoutes);
dbConnection();

app.listen(8000,()=>{
    console.log("Server listening at port 8000")
})