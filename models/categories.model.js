const mongoose = require('mongoose');

const categSchema = mongoose.Schema({
    namecateg: String,
    
});

const Categ = mongoose.model('Categ', categSchema);

module.exports = Categ


