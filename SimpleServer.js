"use strict";
/// <reference path="typings/index.d.ts" />
var express = require('express');
var myBodyParser = require("body-parser");
var myData = [];
myData.push({
    'Name': 'Debdeep Chaudhuri',
    'Age': 39,
    'Sex': 'Male',
    'DOB': '26/10/1977'
}, {
    'Name': 'Somdatta Chaudhuri',
    'Age': 39,
    'Sex': 'FeMale',
    'DOB': '29/03/1977'
});
var app = express();
app.use(myBodyParser.json());
var router = express.Router();
router.get('/', function (req, res) {
    res.json(myData);
    res.end();
});
router.post('/', function (req, res) {
    myData.push(req.body);
    res.json(myData);
    res.end();
});
app.use('/api', router);
var server = app.listen(8080);
console.log(server.address().port);
