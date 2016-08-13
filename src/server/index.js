import { Server } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';

import routes from '../routes';

const reply = ( status, message ) => ({ status, message });

const app = express();
const http = Server( app );

app.use( cors() );
app.use( bodyParser.json() );

app.use( ( req, res ) => {
  // for development, we serve from the webpack dev server
  const host = '//jdm.me:8888';
  const location = createLocation( req.url );

  match({ routes, location }, ( err, redirectLocation, renderProps ) => {
    if ( err ) {
      return res.status( 500 ).send( err.message );
    } else if ( redirectLocation ) {
      return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
    } else if ( ! renderProps ) {
      return res.status( 404 ).send( 'Not found' );
    }

    global.navigator = { userAgent: req.headers[ 'user-agent' ] };

    const innerHTML = renderToString(
      <RouterContext {...renderProps} />
    );

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">

          <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Quicksand:400,700">

          <style>
            html,
            body {
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
              font-family: Roboto, sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          </style>

          <title>Josh David Miller</title>
        </head>
        <body>
          <div id="app">${innerHTML}</div>
          <script src="${host}/static/bundle.js"></script>
        </body>
      </html>
    `;

    res.status( 200 ).send( html );
  });
});

http.listen( 3000, () => console.log( 'API listening on port 3000' ) );

