const router=require('express').Router();
const {getGroups,getGroupById,createGroup,deleteGroup,updateGroup}=require('../controllers/groupController')

router.get("/",getGroups);
router.get("/:id",getGroupById);
router.post("/",createGroup);
router.delete("/delete",deleteGroup);
router.put("/update",updateGroup);

module.exports=router