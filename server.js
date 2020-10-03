var express = require('express');
var fs = require('fs');

var app = express();
var public_path = express.static(__dirname + '/public');
var publicweb_path = express.static(__dirname + '/publicweb');

var port = process.env.PORT || 4000;

app.use(publicweb_path);
app.use(public_path);

const server = app.listen(port, function () {
    const port = server.address().port;
    console.log('App listening at port %s', port);
});

module.exports = server;
