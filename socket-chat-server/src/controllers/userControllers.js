const User=require("../modals/user")

const getUsers=async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).json({users:data})
    }
    catch(err)
    {
        res.status(500).json({
            "err":"message "
        })
    }
}

module.exports={getUsers}