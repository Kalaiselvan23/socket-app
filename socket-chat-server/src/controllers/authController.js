const User=require('../modals/user');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const signup=async(req,res,next)=>{
    console.log("hello signup")
    try
    {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({
            ...req.body,
            password:hash,
        })
        console.log(newUser);
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(err)
    {
        res.status(500).json({msg:"Unable to add user"});
    }
}
const login=async(req,res)=>{
    try{
        console.log(req.body)
        const findUser=User.findOne({
            username:req.body.username,
        })
        if(!findUser){
            res.status(404).json({msg:"User not found"});
        }
        else{
            const checkPassword=await bcrypt.compare(req.body.password,findUser.password);
            if(!checkPassword)
            {
                res.status(500).json({msg:"invalid password"})
            }
            else
            {
                console.log(findUser);
                res.status(200).json({msg:"valid credentials"});
            }
        }
    }
    catch(err)
    {
        res.status(500).json({msg:"internal error"})
    }
}

module.exports={login,signup}