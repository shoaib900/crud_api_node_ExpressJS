const express = require('express');
const router = express.Router();

const {addUser,getAllUsers,updateUser,deleteUser} = require("../controller/user_controller");

router.post("/adduser",addUser);
router.get("/getallusers",getAllUsers);

router.put("/updateuser/:id",updateUser);

router.delete("/deleteuser/:id",deleteUser);


module.exports = router;