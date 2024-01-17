// instagram page with EJS
const express = require("express");
const app = express();
const path = require ("path");

const port = 8080;
//this is use to add the style.css file from "public" folder
// app.use(express.static("public"));
//when we run server from outside (like "htdocs"or "ApnaCOllege" folder) so the "public" path will not found so we use path.join(__dirname,"public")
app.use(express.static(path.join(__dirname,"public/CSS")));//or /public both is right
app.use(express.static(path.join(__dirname,"public/JS")));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data2.json");
    // console.log(instaData);
     const data = instaData[username];
     console.log(data);
     if(data){
    res.render("instagram2.ejs",{data});
     }
     else{
        res.render("insta2ERROR.ejs");
     }
});















