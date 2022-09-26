const express = require("express");


const {createNewArticle}=require("../controllers/article");




const articlesRouter = express.Router();

articlesRouter.post("/", createNewArticle);


module.exports = articlesRouter;

