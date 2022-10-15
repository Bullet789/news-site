const Comment = require("../models/comments.model");

module.exports.commentCont = {
  postComNewsById: async (req, res) => {
    const data = await Comment.create(
      {
        namecomment: req.body.namecomment,
        textcomment: req.body.textcomment,
        newsByCommentId: req.body.newsByCommentId,
      },
      () => res.json(data)
    );
  },
  deleteCom: async (req, res) => {
    const data = await Comment.deleteOne(req.params.id);
    res.json(data);
  },
  getCom: async (req, res) => {
    try {
      const data = await Comment.findById(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
