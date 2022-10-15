
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use (express.json());
app.use (require('./routes/news.route'));
app.use (require('./routes/categories.route'));
app.use (require('./routes/comments.route'));

mongoose.connect('mongodb+srv://deni:admin@cluster0.7wdvqlq.mongodb.net/news?retryWrites=true&w=majority',
(err) => {
    if (err) {
        console.log(err);
    }else {
        console.log('подключено');
    }
 }
);


app.listen(4100, () => console.log('http://news:'))
