const express = require("express");
const data = require("../data.json");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {

    data.character.name = ''
    data.character.fear = ''
    data.character.love = ''
    data.character["items"] = []
    data.path = []

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    res.render("home", data);
});

router.get("/begin/", (req, res) => {

    const items = data.character["items"]

    if (items.length == 0) {
        items.push("A rusty key", "A small shovel", "A glowing crystal")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    res.render("scenes/begin", data)

});

router.get("/begin1/", (req, res) => {

    res.render("scenes/begin1", data)

});

router.get("/begin2/", (req, res) => {

    res.render("scenes/begin2", data)

});


router.get("/forest/", (req, res) => {

    if (!data.path.includes("forest")) {
        data.path.push("forest")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });


    res.render("scenes/forest", data)
});

router.get("/follow/", (req, res) => {

    if (!data.path.includes("follow")) {
        data.path.push("follow")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });


    res.render("scenes/follow", data)
});

router.get("/WBP/", (req, res) => {

    if (!data.path.includes("WBP")) {
        data.path.push("WBP")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });


    res.render("scenes/WBP", data)
});

router.get("/PLF/", (req, res) => {

    if (!data.path.includes("PLF")) {
        data.path.push("PLF")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });


    res.render("scenes/PLF", data)
});

router.get("/castle/", (req, res) => {


    if (!data.path.includes("castle")) {
        data.path.push("castle")
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    res.render("scenes/castle", data)
});

// router.get("/swamp/", (req, res) => {

//     if (!data.path.includes("swamp")) {
//         data.path.push("swamp")
//     }

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
//         if (err) throw err;
//     });

//     res.render("scenes/swamp", data)
// });



// router.get("/dungeon/", (req, res) => {

//     if (!data.path.includes("dungeon")) {
//         data.path.push("dungeon")
//     }

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
//         if (err) throw err;
//     });

//     res.render("scenes/dungeon", data)
// });

router.post("/begin1", (req, res) => {

    if (!data.character.name) {
        data.character.name = req.body.name
        data.character.fear = req.body.fear
        data.character.love = req.body.love
    }

    fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
        if (err) throw err;
    });

    res.redirect("/begin2/")

})


module.exports = router;