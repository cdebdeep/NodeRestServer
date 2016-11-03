"use strict";
/// <reference path="typings/index.d.ts" />
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.write('hello world');
    res.end('hello');
});
var server = app.listen(8081);
console.log(server.address().port);
