const articlesModel = require("../models/articleSchema");


//create function CreatNewArtical
const createNewArticle=(req,res)=>{
const {post,imgPost}=req.body;
const poster=req.token.userId;
const newArticle= new articlesModel({post,imgPost,poster});
newArticle.save()
.then((result) => {
  res.status(201).json({success: true,message: 'Article created',article: result});
})
.catch((err) => {
  res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,
  });
  //console.log(err);

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
//create function getAllArticles
const getAllArticles = (req, res) => {
  const userId = req.token;
  articlesModel.find({}) 
  .then((articles) => {
      if (articles.length) {
        res.status(200).json({success: true,message: 'All the article',userId: userId,articles: articles,comments: articles.comments,like:articles.like });
      } else {
        res.status(200).json({ success: false,message:  'Articles', });
      }
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error',err: err.message,
      });
    });
};
const getArticles = (req, res) => {
  const userId = req.params.userId;
  articlesModel.find({}) 
  .then((articles) => {
      if (articles.length) {
        res.status(200).json({success: true,message: 'All the article',userId: userId,articles: articles,comments: articles.comments,like:articles.like });
      } else {
        res.status(200).json({ success: false,message:  'Articles', });
      }
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error',err: err.message,
      });
    });
};
//create getArticlesByPoster
const getArticlesByPoster = (req, res) => {
  let posterId = req.query.poster;

  articlesModel.find({ poster: posterId })
  .then((articles) => {
    if (!articles.length) {
      return res.status(404).json({success: false,message: ` ${posterId} has no articles`,});
      }
      res.status(200).json({success: true, message: `All the articles  ${posterId}`,articles: articles,
      });
    })
    .catch((err) => {
      res.status(500).json({success: false,message: `Server Error`,err: err.message,});
    });
};
//create function getArticlesByRegex
// const getArticlesByRegex= async(req,res)=>{
// const search=req.query.search;
// const regex=new RegExp(search,"gi");
// console.log(regex);

// };
module.exports={
  createNewArticle,
  updateArticle,
  deleteArticle,
  getAllArticles,
  getArticlesByPoster,
  getArticles};