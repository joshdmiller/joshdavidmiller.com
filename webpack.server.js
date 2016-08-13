var webpack = require( 'webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var config = require( './webpack.config' );

new WebpackDevServer( webpack( config ), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
}).listen( 8888, '0.0.0.0', function ( err ) {
  if ( err ) {
    return console.log( err );
  }

  console.log( 'Listening at http://jdm.me:8888/' );
});

