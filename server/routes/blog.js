const router = require('express').Router();
const Posts = require('../models/Post');

router.get( '/', (req, res) => {
    console.log('stuff hit!');
    Posts.findAll().then( ret => {
        res.send(ret)
    })
});

router.get( '/:id', ( req, res ) => {
    console.log( req.params );
    Posts.findOne({
        where: {
            id: req.params.id
        }
    }).then( item => {
        if( item ){
            res.send( item );
        }else{
            res.send( null );
        }
    })
});

module.exports = router;