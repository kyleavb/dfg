const router = require( 'express' ).Router();

// Route Files
const health = require( './health' );
const blog = require( './blog' );

router.use( ['/health', '/healthz'], health );
router.use( '/blog', blog );

module.exports = router;