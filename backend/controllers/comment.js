const commentsModel = require("../models/commentSchema");
const articlesModel = require("../models/articleSchema");



const createNewComment = (req, res) =>{
  const articleId = req.token._id;
  const { comment } = req.body;
  const commenter = req.token.userId;
  const newComment= new commentsModel({comment,commenter})


newComment.save()
  .then((result) => {
articlesModel.updateOne({ _id: articleId }, { $push: { comments: result._id } })
.then(() => {
res.status(201).json({success: true,message:  'add Comment',comment: result,});
})
.catch((err) => {
res.status(500).json({success: false,message: 'Server Error',err: err.message,});
});
}).catch((err) => {
res.status(500).json({success: false,
message: 'Server Error',
err: err.message,
});
});
  
};
//create function updateComment
const updateComment = (req, res)=>{
  const _id = req.params.id;
  commentsModel.findByIdAndUpdate(_id, req.body, { new: true })
.then((result) => {
 if (!result) {
 return res.status(404).json({ success: false,message: ` ${_id} not found`});
}
res.status(202).json({success: true,message: 'Article updated',comment: result,});
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error', err: err.message,});
    });
};

//create delete comment
const deleteComment = (req, res) => {
  const _id = req.params.id;
  commentsModel.findByIdAndDelete(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({success: false, message: ` ${_id} not found`});
      }
      res.status(200).json({success: true,message: 'Comment deleted'});
    })
    .catch((err) => {
      res.status(500).json({success: false,message: 'Server Error',err: err.message});
    });

};

module.exports = {createNewComment,updateComment,deleteComment};
  
