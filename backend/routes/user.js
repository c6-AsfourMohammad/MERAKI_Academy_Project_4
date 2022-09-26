const express = require("express");
const { register } = require("../controllers/user");



const usersRouter=express.Router();


usersRouter.post("/", register);
// usersRouter.post("/login", Login);





module.exports = usersRouter;
