const express = require("express");
const { register ,updateUser,getUser,getUserById} = require("../controllers/user");



const usersRouter=express.Router();


usersRouter.post("/", register);
usersRouter.put("/:id", updateUser);
usersRouter.get("/", getUser);
usersRouter.get("/search_2", getUserById);



// usersRouter.post("/login", Login);





module.exports = usersRouter;
