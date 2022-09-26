const express = require("express");


const {createNewArticle}=require("../controllers/article");
const { createNewComment } = require("./../controllers/comment");




const articlesRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

articlesRouter.post("/", createNewArticle);

articlesRouter.post("/:id/comments",createNewComment);
module.exports = articlesRouter;

