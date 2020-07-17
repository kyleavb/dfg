const router = require('express').Router();
const db = require( '../models' );

router.post( '/', (req, res) => {
    console.log(req.body);
    let {title, body} = req.body;
    db.Post.create({
        title: title,
        body: body
    }).then( post => {
        res.send([post.title, post.body]);
    });
});

router.post ( '/1', async (req, res) => {
    let {title, body} = req.body;
    
    const [post, created] = await db.Post.findOrCreate({
        where: {title: title},
        defaults:{
            title: title,
            id: 394058
        }
    })
    console.log(`--------------------${created}-------------------------`)
    if( created ){
        console.log('MADE IT MAN');
        res.send(post);
    }else{
        console.log( 'SHIT ALREADY EXISTS!' )
        res.send(post);
    }
});

module.exports = router;