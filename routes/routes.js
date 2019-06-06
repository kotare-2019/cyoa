const express = require("express");
const data = require("../data.json");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("home", data);
});

router.get("/begin/", (req, res) => {

    const items = data.character["items"]

    if(items.length == 0) {
        items.push("A rusty key","A small shovel","A glowing crystal")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    console.log(data)

    res.render("scenes/begin", data)

});

router.get("/scene1/", (req, res) => {
    res.render("scenes/scene1", data)
});

router.get("/scene2/", (req, res) => {
    res.render("scenes/scene2", data)
});

router.get("/scene3/", (req, res) => {
    res.render("scenes/scene3", data)
});

router.get("/scene4/", (req, res) => {
    res.render("scenes/scene4", data)
});

////////////// POST

router.post("/begin", (req, res) => {
    
    res.redirect("")
})


module.exports = router;