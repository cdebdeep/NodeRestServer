//import {express} from './express'
var express = require('express');
var app = express();

app.get('/',function(req,res){
res.end('Hello');
});

var server = app.listen('8081',function(){
var host = server.address().address;
var port = server.address().port;
console.log(host,port);
});
