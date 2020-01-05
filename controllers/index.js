var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const jwtsecret = "mysecretkey";
var fs = require("fs");
const db = require('../models');
const Index = function (req, res, next) {
    res.render('index', { title: 'Express' });
};
module.exports = {
    Index
}