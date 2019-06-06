const express = require("express");
const data = require("../data.json");
const router = express.Router();
const fs = require("fs");


router.get("/", (req, res) => {
    res.redirect("/start");
});

router.get("/start", (req, res) => {
    res.render("scenes/start", data);
});

router.get("/scene1/", (req, res) => {
    res.render("", data)
});

router.get("/scene1/", (req, res) => {
    res.render("", data)
});

router.get("/scene1/", (req, res) => {
    res.render("", data)
});

router.get("/scene1/", (req, res) => {
    res.render("", data)
});

module.exports = router;