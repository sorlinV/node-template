const express = require('express');
const mustache = require('mustache');

let app = express();

app.use(express.static("public"));

app.get("/test", function(req, res) {
    let str = mustache.render("Hello {{name}}!!! You are awesome!", {
        name: "val"
    })
    res.send(str)
});

app.listen(8080, function() {
    console.log('Server listening on port 80...');
});