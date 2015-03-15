var express = require( 'express' );
var path = require( 'path' );

var app = express();
var assetsPath = path.join( __dirname, 'dist' );

app.use( '/assets', express.static( assetsPath ) );

app.get( '*', function ( req, res ) {
  res.sendFile( path.join( assetsPath, '..', 'src', 'index.html' ) );
});

app.listen( 8080 );
console.log( 'Server started on port 8080' );

