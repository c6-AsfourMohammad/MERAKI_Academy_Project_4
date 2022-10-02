const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const { register ,updateUser,getUser,getUserById} = require("../controllers/user");



const usersRouter=express.Router();


usersRouter.post("/", register);
usersRouter.put("/:id", updateUser);
usersRouter.get("/", getUser);
usersRouter.get("/one",authentication, getUserById);



// usersRouter.post("/login", Login);





module.exports = usersRouter;
