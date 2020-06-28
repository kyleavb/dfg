const router = require('express').Router();

router.get( '/:id', ( req, res ) => {
    console.log( req.params );
    res.send( { title: `Blog ${ req.params.id }`, body: 'lorem'});
});

module.exports = router;