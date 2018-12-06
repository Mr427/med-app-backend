const mongoose = require('mongoose');
const router = require('express').Router();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-starter";

router.use((req, res, next) => {
    mongoose.Promise = Promise;
    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    var db = mongoose.connection;

    var MovieDetail = require("../models/movieDetails");

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function(){
        MovieDetail.find({title:/West Side Story/}, (err, movie) => {
            if(err) return console.log(err);
            res.end(movie[0].poster);
            mongoose.disconnect();
        });
    });
});

module.exports = router;