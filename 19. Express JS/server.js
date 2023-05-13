const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    res.send("hi this is the home page ...");
})

app.get("/about", (req, res) => {
    // console.log(req);
    res.send("hi this is about page ...");
})

app.get("/contactus", (req, res) => {
    // console.log(req);
    res.send("hi this is the contactus page ...");
})

// app.get("/test", (req, res) => {
//     console.log(res);
// })

app.listen(PORT, () => {
    console.log("server start on port " + `${PORT}`);
})