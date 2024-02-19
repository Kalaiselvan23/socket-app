const router=require('express').Router();
const {getMessages,postMessage} = require("../controllers/messageController")
router.get("/",getMessages)
router.post("/",postMessage)
module.exports=router