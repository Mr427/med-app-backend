var mongoose = require("mongoose");

var testDataSchema = new mongoose.Schema({
    title: String,
    number: Number
});

testDataSchema.method("print", function() {
    var greeting = (this.title || this.number)
        ? "Title is " + this.title + " and number is " + this.number
        : "I don't have a title or number";
    return greeting;
//    console.log(greeting);
});

module.exports = mongoose.model("testData", testDataSchema);