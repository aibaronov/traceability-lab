const express = require('express');
const cors = require('cors');
const path = require("path");
const exp = require('constants');

const app = express();
app.use(cors());
app.use(express.json());

//Middleware
app.use(express.static(path.join(__dirname, "../public")));
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