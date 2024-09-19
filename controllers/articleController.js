const Article = require('../models/articleSchema');
const article=require('../models/articleSchema');

//createArticle
exports.createArticle=async(req,res)=>{
    const {title,content,tags,category,status}=req.body;

    const article=new Article({
        title,content,tags,category,status:status || 'Draft'
    });

    await article.save();
    res.status(201).send(article);
}

exports.getArticle=async(req,res)=>{
    const {page=1 ,limit=10,category}=req.query;
    let query=category?(category): {};

    const articles=await Article.find(query)
    .skip((page-1)* limit)
    .limit(Number(limit))

    const total =await Article.countDocuments(query)
    res.json({total,articles})
}

exports.getArticleById=async(req,res)=>{
    const article=await Article.findById(req.params.id).populate('comments')

    if(!article) return res.status(404).send('Article Not Found')
      res.send(article)

    }


    exports.updateArticleById=async(req,res)=>{
        try{
            const {title,content,tags,category,status}=req.body;
            const articleId=req.params.id;

            const article=await Article.findById(articleId);

            if(!article){
                return res.status(404).send('Article Not Found')
            }
            if(article.status!=='Draft'){
                return res.status(403).send('Article is not draft')
            }

            const updateArticle=await Article.findByIdAndUpdate(
                articleId,
                {title,content,tags,category,status},
                {new:true}
            );

            await updateArticle.save();
            res.status(200).send(updateArticle);
        }catch(err){
            res.status(500).send(err.message)

        }
    }  ;

    exports.deleteArticle=async(req,res)=>{
        await Article.findByIdAndDelete(req.params.id);
        res.status(200).send('Article deleted')
    }

    exports.likeArticle=async(req,res)=>{
        try{
            const articleId=req.params.id;
            const article=await Article.findById(articleId);

            if(!article){
                return res.status(404).send('Article Not Found')
            }
            if(article.status!='Published'){
                return res.status(403).send('Article is not publish')
            }

            article.likes+=1;
            
            const updateArticle=await article.save();

            res.status(200).send(updateArticle);
        }
        catch (err){
            res.status(500).send(err.message)
        }
    }