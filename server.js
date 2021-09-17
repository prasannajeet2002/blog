const express = require('express')
const mongoose = require('mongoose')
const articlerouter = require('./routes/article')
const app = express()

mongoose.connect('mongodb://localhost/blog' , {useNewUrlParser:true ,useUnifiedTopology:true})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.get('/' , (req, res) => { 
    const article = [{
        title: '1st article',
        createdat: new Date(), 
        description: 'this is the article description'
    },
    {
        title: '2nd article',
        createdat: new Date(),
        description: 'this is the article description'
        
    }]
    res.render('articles/index' , {article: article})
})

app.use('/article/hgug', articlerouter)
app.listen(4000)