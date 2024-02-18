const uuid=require("uuid")
const Group=require("../modals/groupChats")
const getGroups=async(req,res)=>{
    try
    {
        const data=await Group.find({members:{$in:[req.query.id]}});
        res.status(200).json({
            groups:[...data]
        })
    }
    catch(err)
    {
        res.status(500).json({msg:"unable to fetch group"})
    }
}
const getGroupById=async(req,res)=>{

}
const createGroup=async(req,res)=>{
    try{
        console.log(req.body)
        const newGroup=new Group({
        members:[...req.body.selectedUsers],
            chatName:req.body.chatName,
            chatId:uuid.v4()
        })
        const data=await newGroup.save();
        res.status(200).json("msg:Group added");
    }
    catch(err)
    {
        console.log(err)
    }

}
const deleteGroup=async(req,res)=>{

}
const updateGroup=async(req,res)=>{

}
module.exports={getGroups,getGroupById,createGroup,updateGroup,deleteGroup}