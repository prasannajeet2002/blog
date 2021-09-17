const express = require('express')
const article = require('./../models/articlesdb')
const router = express.Router()

router.get('/new', (req,res) => {
    res.render('articles/new', {article: new article() })
})
router.get('/:id', (req,res) => { 

}) 

router.post('/', async(req,res) => {
let article = new article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
})
try {
    article = await article.save()
    res.redirect(`/articles/new`)
} catch (error) {
    // console.log(error)
//    res.render('articles/new', {article: article}) 
res.send(error)
}
})

module.exports = router