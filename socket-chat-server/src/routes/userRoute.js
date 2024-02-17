const express=require("express")
const router=express.Router();
const {getUsers}=require("../controllers/userControllers")

router.get("/",getUsers);
router.post("/new",getUsers);

module.exports=router

