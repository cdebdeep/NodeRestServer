/// <reference path="typings/index.d.ts" />
import express = require('express')
import http = require("http");


var app  = express();
app.get('/',function(req:http.ServerRequest,res:http.ServerResponse,){
res.write('hello world');
res.end();
})

var server =  app.listen(8081);
console.log(server.address().port)
