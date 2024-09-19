const mongoose=require('mongoose')

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    tags:[String],
    category:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Draft','published'],
        default:'Draft'
    },
    likes:{
        type:Number,
        default:0
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
        

 } ],
    createAt:{
        type:Date,
        default:Date.now

    },
    updateAt:{
        type:Date,
        default:Date.now
    }

});
const Article=mongoose.model('Article',articleSchema);
module.exports=Article;