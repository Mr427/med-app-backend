const router = require("express").Router();

var date = new Date();

router.use("/full", (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.url);
    res.end(`<div>Complete date is ${date}</div>`);
    next();
}).use("/year", (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.url);
    res.end(`<div>Year is ${date.getFullYear()}</div>`);
    next();
});

module.exports = router;