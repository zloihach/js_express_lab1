const request = require('express');
const express = require('express');
const res = require('express/lib/response');
const personRouter = require('./routes/person.routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api", personRouter);
app.get("/", function(request, response) {
    response.redirect('/api/person');
});

app.get("/", function(request, response) {
    response.sendFile(__dirname + "index.html");
});