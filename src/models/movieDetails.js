var mongoose = require("mongoose");

var movieDetailSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: Array,
    genres: Array,
    director: String,
    writers: Array,
    actors: Array,
    plot: String,
    poster: String,
    imdb: { id: String, rating: Number, votes: Number },
    tomato: { meter: Number, image: String, rating: Number, reviews: Number, fresh: Number, consensus: String, userMeter: Number, UserRating: Number, userReviews: Number },
    metacritic: Number,
    awards: { wins: Number, nominations: Number, text: String },
    type: String
}, {collection: "movieDetails"});

movieDetailSchema.method("print", function() {
    var greeting = this.title
        ? "Title is " + this.title
        : "No Title";
    return greeting;
//    console.log(greeting);
});

module.exports = mongoose.model("movieDetail", movieDetailSchema);