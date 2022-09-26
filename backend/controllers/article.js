const articlesModel = require("../models/articleSchema");



const createNewArticle=(req,res)=>{
const {post}=req.body;
const poster=req.token;
const newArticle= new articlesModel({post,poster});
newArticle
.save()
.then((article) => {
  res.status(201).json({
    success: true,
    message: `Article created`,
    article: article,
  });
})
.catch((err) => {
  res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,
  });
});
};






module.exports={createNewArticle};