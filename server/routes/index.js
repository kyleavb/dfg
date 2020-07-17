const router = require( 'express' ).Router();

// Route Files
const health = require( './health' );
const blog = require( './blog' );
const test = require( './test' );

router.use( ['/health', '/healthz'], health );
router.use( '/blog', blog );
router.use( '/test', test );

module.exports = router;