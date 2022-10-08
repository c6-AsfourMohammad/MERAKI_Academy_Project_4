const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const { register ,updateUser,getAllUser,getUserById,getuserByfirstName} = require("../controllers/user");



const usersRouter=express.Router();


usersRouter.post("/", register);
usersRouter.put("/:id", updateUser);
usersRouter.get("/", getAllUser);
usersRouter.get("/one",authentication, getUserById);
// usersRouter.get("/:firstName", getuserByfirstName);
// usersRouter.get("/search_3", authentication, getuserByfirstName);
usersRouter.get("/:firstName", getuserByfirstName);



// usersRouter.post("/login", Login);





module.exports = usersRouter;
