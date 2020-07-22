const router = require('express').Router();
const Lerg = require('../models/Post');

router.post( '/', (req, res) => {
    console.log(req.body);
    // let {title, body} = req.body;
    // db.posts.create({
    //     title: title,
    //     body: body
    // }).then( post => {
    //     res.send([post.title, post.body]);
    // });
});

router.post ( '/1', async (req, res) => {
    console.log('------------START------------');
    // Lerg.findAll().then( retPost => {
    //     // console.log(retPost);
    //     res.send(retPost);
    // }).catch( err => console.log(err))
    
    
    
    let {title, body} = req.body;
    console.log(`title: ${title}`)
    const [post, created] = await Lerg.findOrCreate({
        where: {title: title},
        defaults:{
            title: title,
            body: body
        }
    })
    .catch( (e) => {
        console.log(`-------Error: ${e}`);
    })
    if( created ){
        console.log('MADE IT MAN');
        res.send(post);
    }else{
        console.log( 'SHIT ALREADY EXISTS!' )
        res.send(post);
    }
});

module.exports = router;