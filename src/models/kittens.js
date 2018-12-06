var mongoose = require("mongoose");

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.method("speak", function() {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    return greeting;
//    console.log(greeting);
});

module.exports = mongoose.model("Kitten", kittySchema);