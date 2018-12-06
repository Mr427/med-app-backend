const mongoose = require('mongoose');
const router = require('express').Router();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-starter";

router.use("/make", (req, res, next) => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    var db = mongoose.connection;

    var TestData = require("../models/testData");

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function(){
//        console.log(db.host);
//        console.log(db.port);
//        console.log(db.name);
        var dataOne = new TestData({title: "Test One", number: 1});
        res.end(`<div>${dataOne.print()}</div>`);
        mongoose.disconnect();
    });
}).use("/save", (req, res, next) => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    var db = mongoose.connection;

    var TestData = require("../models/testData");

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function(){
//        console.log(db.host);
//        console.log(db.port);
//        console.log(db.name);
        var dataTwo = new TestData({title: "Test Two", number: 2});

        dataTwo.save(function(err, dataTwo) {
            if(err) {
                console.log(err);
                mongoose.disconnect();
            }
            else {
                res.end(`<div>${dataTwo.print()}</div>`);
                mongoose.disconnect();
            }
        });
    });
}).use("/find", (req, res, next) => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    var db = mongoose.connection;

    var TestData = require("../models/testData");

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function(){
        TestData.find({title:"Test Two"}, (err, data) => {
            if(err) {
                mongoose.disconnect();
                return console.log(err);
            }
            for(test in data) {
                res.write(`<div>${data[test].title}</div>`);
                res.write(`<div>${data[test].number}</div>`);
            }
            res.end();
            mongoose.disconnect();
        });
    });
});

module.exports = router;