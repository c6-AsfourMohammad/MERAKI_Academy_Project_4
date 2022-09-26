const articlesModel = require("../models/articleSchema");


//create function creatNewArtical
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
//create function updateArticle
const updateArticle = (req, res)=>{
  const _id = req.params.id;
  articlesModel
    .findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ success: false,message: ` ${_id} not found`});
      }
      res.status(202).json({success: true,message: 'Article updated',article: result,});
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error', err: err.message,});
    });
};



//create function  deleteArticle
const deleteArticle = (req, res) => {
  const _id = req.params.id;
  articlesModel
    .findByIdAndDelete(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ success: false,message: ` ${_id}  not found`});
      }
      res.status(200).json({success: true,message: 'Article deleted'});
    })
    .catch((err) => {
      res.status(500).json({success: false,message:' Server Error',err: err.message});
    });

};

const getAllArticles = (req, res) => {
  const userId = req.token.userId;
  articlesModel.find({}).populate("comments").exec()
    .then((articles) => {
      if (articles.length) {
        res.status(200).json({success: true,message: 'All the article',userId: userId,article: article,comments: article.comments,like:article.like });
      } else {
        res.status(200).json({ success: false,message:  'Articles', });
      }
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error',err: err.message,
      });
    });
};


module.exports={
  createNewArticle,
  updateArticle,
  deleteArticle,
  getAllArticles};