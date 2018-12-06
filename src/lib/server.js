"use strict";

const dotEnv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 4040;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/time", require("../routes/time-route"));
app.use("/testdata", require("../routes/test-route"));
app.use("/movie", require("../routes/movie-route"));
app.use("/kitten", require("../routes/kitten-route"));

exports.start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
};