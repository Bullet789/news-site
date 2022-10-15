const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    header : String,
    text : String,
    categories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categ'}
})

const News = mongoose.model('News', newsSchema)

module.exports = News
