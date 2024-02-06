const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors());
var requestCount = 0;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    requestCount++;
    console.log("request count ", requestCount);
    next();
})

app.use(express.static("static"));

app.listen(81, function () {
    console.log("server listeing at port 81");
})
