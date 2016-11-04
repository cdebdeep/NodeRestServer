/// <reference path="typings/index.d.ts" />
import express = require('express')
import http = require("http");
import * as myBodyParser from "body-parser";

var myData:Array<Object>=[];
myData.push(
    {
     'Name':'Debdeep Chaudhuri',
      'Age' :39,
      'Sex':'Male',
      'DOB' :'26/10/1977'
    },
    {
     'Name':'Somdatta Chaudhuri',
      'Age' :39,
      'Sex':'FeMale',
      'DOB' :'29/03/1977'
    }
      );

var app  = express();

app.use(myBodyParser.json());

var router = express.Router();

router.get('/',function(req:any,res:any){
res.json(
    myData
);
res.end();
});

router.post('/',function(req:any,res:any){
myData.push(req.body);
res.json(
    myData
);
res.end();
});


app.use('/api',router);
var server =  app.listen(8080);
console.log(server.address().port)
