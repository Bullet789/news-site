const {Router} = require('express');
const {newsCont} = require('../controllers/news.controller')
const route = Router()


route.post('/news',newsCont.postNews);
route.delete('/news',newsCont.deleteNews);
route.patch('/news',newsCont.patchNews);
route.get('/news/:id',newsCont.getNewsById);
route.get('/news',newsCont.getNews);
route.get('/news/categories/:id',newsCont.getNewsByCategor);

module.exports = route



