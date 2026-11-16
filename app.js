const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const port = 9999;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", ejsMate);

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`);
}); 

app.get("/",(req, res)=>{
    res.render("sections/home.ejs");
})