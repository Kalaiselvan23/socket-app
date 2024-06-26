const mongoose=require("mongoose")
const messageSchema=mongoose.Schema({
    senderId:{
        type:String,
        required:true,
    },
    chatId:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    messageId:{
        type:String,
        required:true,
    }
},{timestamps:true})
const Message=mongoose.model('Message',messageSchema);
module.exports=Message
