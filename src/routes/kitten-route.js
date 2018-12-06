const mongoose = require('mongoose');
const router = require('express').Router();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-starter";

router.use((req, res, next) => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    var db = mongoose.connection;

    var Kitten = require("../models/kittens");

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function(){
        var silence = new Kitten({ name: "Silence" });
        var fluffy = new Kitten({ name: "Fluffy" });

        res.write(`<div>${silence.speak()}</div>`);
        res.write(`<div>${fluffy.speak()}</div>`);
        res.end();

        mongoose.disconnect();
    });
});

module.exports = router;