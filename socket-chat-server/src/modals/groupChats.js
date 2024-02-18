const mongoose=require("mongoose")
const groupSchema=new mongoose.Schema({
    chatId:{
        type:String,
        required:true,
        unique:true,
    },
    members:{
        type:[String],
        required:true,
    },
    chatName:{
        type:String,
        required:true,
        unique:true
    },

},{timestamps:true})
const Group=mongoose.model('Group',groupSchema);
module.exports=Group