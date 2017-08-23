const express = require('express');
const mustache = require('mustache');
const fs = require('fs');

let db = ['toto', 'tata', 'titi', 'tutu', 'john'];

let app = express();

let count = 0;

function counter() {
    return count++;
}
app.get("/", function(req, res) {
    res.render("index", {
        names: db,
        rand: db[Math.round(Math.random() * (db.length - 0.5))],
        counter: counter()
    });
});

app.engine('html', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err) {
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    });
});

app.set('views', './template');
app.set('view engine', 'html');

app.use(express.static("public"));

app.listen(8080, function() {
    console.log('Server listening on port 8080...');
});