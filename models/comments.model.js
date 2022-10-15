const mongoose = require('mongoose');

const commentSChema = mongoose.Schema({
    namecomment: String,
    textcomment: String,
    newsByCommentId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'News'
    }
})

const Comment = mongoose.model('Comments', commentSChema)

module.exports = Comment