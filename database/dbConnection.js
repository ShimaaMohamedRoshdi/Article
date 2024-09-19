const  mongoose=require("mongoose")

const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"article",

    })
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log("some error on database")
    })
}
module.exports=dbConnection;