const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/calcIndex.html")
})

app.post("/", (req, res) => {
    console.log(req.body);
    let firstNumber = Number(req.body.num1);
    let lastNumber = Number(req.body.num2);
    console.log(firstNumber);
    console.log(lastNumber);
    res.send("Result is " + (firstNumber + lastNumber))
})

app.listen(PORT, () => {
    console.log("server start on port " + `${PORT}`);
})