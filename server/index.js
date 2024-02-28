const db = require("./db.js");
db.connectToDB();
const express = require("express");
const app = express();
var cors = require("cors");
const port = 4000;
app.use(cors());
app.listen(port, ()=>
{
    console.log(`Listening at port: http://localhost:${port}`);
})
