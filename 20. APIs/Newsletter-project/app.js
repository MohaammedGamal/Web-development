const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});