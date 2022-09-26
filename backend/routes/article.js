const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewArticle,updateArticle}=require("../controllers/article");
const { createNewComment } = require("./../controllers/comment");




const articlesRouter = express.Router();


articlesRouter.post("/", createNewArticle);
articlesRouter.put("/:id", updateArticle);

articlesRouter.post("/:id/comments",createNewComment);
module.exports = articlesRouter;

