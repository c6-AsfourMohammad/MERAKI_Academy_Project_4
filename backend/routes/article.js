const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewArticle,updateArticle, deleteArticle,getAllArticles}=require("../controllers/article");
const { createNewComment,updateComment ,deleteComment} = require("./../controllers/comment");




const articlesRouter = express.Router();


articlesRouter.post("/",authentication,authorization("CREATE_POST"), createNewArticle);
articlesRouter.get("/",authentication, getAllArticles);

articlesRouter.put("/:id", updateArticle);
articlesRouter.delete("/:id", deleteArticle);


articlesRouter.post("/:id/comments",authentication,authorization("CREATE_COMMENTS"),createNewComment);
articlesRouter.post("/:id/comments",updateComment);
articlesRouter.delete("/:id/comments",deleteComment);




module.exports = articlesRouter;

