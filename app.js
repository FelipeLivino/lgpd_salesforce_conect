require("dotenv").config();
var express = require('express');
var errorhandler = require('errorhandler');
var http = require('http');

var salesforce = require('./src/lib/salesforceConnect');

var app = express(); 
// app.set('port', process.env.PORT || 3000);
app.set('port',  3000);
app.use(express.json());


if ('development' == app.get('env')) {
  app.use(errorhandler());
}

 
app.get('/', salesforce.login);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});