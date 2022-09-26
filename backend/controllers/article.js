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





module.exports={createNewArticle,updateArticle};