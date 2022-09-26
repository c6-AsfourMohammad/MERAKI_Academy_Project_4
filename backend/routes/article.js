const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewArticle,updateArticle, deleteArticle}=require("../controllers/article");
const { createNewComment,updateComment ,deleteComment} = require("./../controllers/comment");




const articlesRouter = express.Router();


articlesRouter.post("/", createNewArticle);
articlesRouter.put("/:id", updateArticle);
articlesRouter.delete("/:id", deleteArticle);


articlesRouter.post("/:id/comments",createNewComment);
articlesRouter.post("/:id/comments",updateComment);
articlesRouter.delete("/:id/comments",deleteComment);




module.exports = articlesRouter;

