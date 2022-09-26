const express = require("express");
const { register ,updateUser} = require("../controllers/user");



const usersRouter=express.Router();


usersRouter.post("/", register);
usersRouter.put("/:id", updateUser);

// usersRouter.post("/login", Login);





module.exports = usersRouter;
