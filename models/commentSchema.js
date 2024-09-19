const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    articleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Articl',
        required:true

    },
    CreateAt:{
        type:Date,
        default:Date.now
    }
})
const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;