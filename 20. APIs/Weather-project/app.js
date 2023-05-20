const { json } = require("express");
const express = require("express");
const https = require("https"); // This is a native nodejs module so we didn't need to install anything extra
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

// const Query = "cairo";
// const Key = "6f756247a65a692fb324db6a5518107c";
// const Unit = "metric";
// let URL = "https://api.openweathermap.org/data/2.5/weather?appid=" + Key + "&q=" + Query + "&units=" + Unit + "";

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

})

app.post("/", (req, res) => {

    const requestBody = req.body;
    const Query = req.body.cityName;
    const Key = "6f756247a65a692fb324db6a5518107c";
    const Unit = "metric";
    let URL = "https://api.openweathermap.org/data/2.5/weather?appid=" + Key + "&q=" + Query + "&units=" + Unit + "";
    console.log("Request received ...")
    console.log(requestBody);

    https.get(URL, (apiRes) => { // The get method returns just a response
    console.log(apiRes);
    console.log("================");
    apiRes.on("data", (data) => {
        console.log(data);
        const actualData = JSON.parse(data); // A method to convert the content into JavaScript object
        console.log(actualData.main.temp);
        console.log(actualData.weather[0].description);
        res.write("<h1>Hi there this is the weather app ...</h1>");
        res.write("<p>Weather in " + Query + " is " + actualData.weather[0].description +"</p>");
        res.write("<p>Temp in " + Query + " is " + actualData.main.temp + "</p>");
        res.send();
    })
});


})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})