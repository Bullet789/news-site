const {Router} = require('express');
const route = Router()
const { commentCont } = require('../controllers/comment.controller');

route.post('/comment',commentCont.postComNewsById);
route.delete('/comment',commentCont.deleteCom);
route.get('/comment/:id',commentCont.getCom);


module.exports = route