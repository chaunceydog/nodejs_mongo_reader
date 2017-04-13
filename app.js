/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment/development');
var security = require('./config/environment/security');
var logger = require("./logger");
var bodyParser = require('body-parser');
var fs = require('fs');
var logDirectory = __dirname + '/log';

var stormpath = require('express-stormpath');
var exSp = stormpath;

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.set('debug', true);

// Setup server
var app = express();

//var morgan = require('morgan')('combined', { "stream": logger.stream });
var morgan = require('morgan');

// app.use(morgan('combined'));
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.use(stormpath.init(app, {
    apiKeyFile: './config/environment/.stormpath/apiKey.properties',
    application: 'https://api.stormpath.com/v1/applications/5G1pskhg4GYavARHA375CR',
    secretKey: security.stormpath_secret_key,
    href: 'https://api.stormpath.com/v1/applications/5G1pskhg4GYavARHA375CR',
    name: 'Reader Test',
    debug: 'info'
}));

// parse application/json
app.use(bodyParser.json())

var allowCrossDomain = function(req, res, next) {
    //console.dir(req);
    res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Authorization');

    next();
}
app.use(allowCrossDomain);
app.set('readerLogger', logger);

// add stormpath config
// app.use(exSp.init(app, {
//    apiKey : {
//        id: config.sp.STORMPATH_API_KEY_ID,
//        secret: config.sp.STORMPATH_API_KEY_SECRET
//    },
//    application: {
//        href: config.sp.STORMPATH_APP_HREF
//    }
// }));

var server = require('http').createServer(app);
//var server = require('https').createServer(
//    {key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') },
//    app);
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});

require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(config, app, mongoose);

//app.use(function(req, res, next){
//  res.status(404);
//  res.json({ error: 'Invalid URL' });
//});

// Start server
app.on('stormpath.ready',function(){
    console.log('Stormpath Ready');
    server.listen(config.port, config.ip, function () {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
});

// Expose app
exports = module.exports = app;
