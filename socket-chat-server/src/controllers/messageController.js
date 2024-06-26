const Message=require("../modals/messages")

const getMessages=async(req,res)=>{
    const chatId=req.query.chatId;
    const messages=await Message.find({chatId:chatId})
    res.status(200).json({messages:[...messages]})
}
const postMessage=async (req,res)=>{
    try
    {
        const {message,chatId,senderId,messageId}=req.body;
        const newMessage=new Message({
            text:message,
            chatId,senderId,
            messageId
        })
        await newMessage.save();
        res.status(200).json(newMessage)
    }
    catch(err)
    {
        console.log({msg:"unable to post data"});
    }
}
module.exports={getMessages,postMessage}