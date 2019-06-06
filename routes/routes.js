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

    res.render("scenes/begin", data)

});

router.get("/forest/", (req, res) => {

    if(!data.path.includes("forest")){
        data.path.push("forest")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });


    res.render("scenes/forest", data)
});

router.get("/swamp/", (req, res) => {

    if(!data.path.includes("swamp")){
        data.path.push("swamp")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    res.render("scenes/swamp", data)
});

router.get("/scene3/", (req, res) => {
    res.render("scenes/scene3", data)
});

router.get("/scene4/", (req, res) => {
    res.render("scenes/scene4", data)
});


module.exports = router;