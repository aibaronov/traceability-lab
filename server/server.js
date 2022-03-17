const express = require('express');
const cors = require('cors');
const path = require("path");
const exp = require('constants');

const app = express();
app.use(cors());
app.use(express.json());

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '1ea5b8d0d5a34402ac3f6d546109d566',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello Arthur!");

app.get('/', (req, res) =>{
    rollbar.info("HTML served successfully");
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
//Middleware
// app.use(express.static(path.join(__dirname, "../public")));
// app.use("/styles", express.static(path.join(__dirname, "../public/index.css")));

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// })

// app.get("/styles", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.css"));
// })

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});