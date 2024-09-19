const express=require('express')

const{
    createArticle,
    getArticle,
    getArticleById,
    updateArticleById,
    deleteArticle,
    likeArticle
}=require('../controllers/articleController')

const router=express.Router();
router.post('/',createArticle);
router.get('/',getArticle);
router.get('/:id',getArticleById);
router.put('/:id',updateArticleById);
router.delete('/:id',deleteArticle);
router.post('/:id/like',likeArticle);



module.exports=router;