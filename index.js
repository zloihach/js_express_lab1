const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

const urlendcodedParser = express.urlencoded({ extended: false });

app.get("/", function(request, response) {
    response.render("homePage");
});
app.get("/test", function(request, response) {
    response.render("testPage");
});
app.get("/about", function(request, response) {
    response.render("aboutPage");
});
app.get("/contact", function(request, response) {
    response.render("contactPage");
});
app.get("/reg", function(request, response) {
    response.render("registrPage");
});

app.post("/reg", urlendcodedParser, function(request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
app.listen(3000, () => console.log("Server started!"));