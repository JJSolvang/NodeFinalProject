var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/* GET list page. */
router.get('/#list', function(req, res) {
  res.render('#list');
});

let noteArray = [];
let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pTitle, pYear, pType) {
    this.title = pTitle;
    this.year = pYear;
    this.type = pType;
}

function Start() {
    noteArray.push(new NoteObject("Destiny", "2014", "FPS"));
    noteArray.push(new NoteObject("Destiny 2", "2017", "FPS"));
    noteArray.push(new NoteObject("Portal 2", "2011", "FPS"));
    console.log(noteArray);
}

module.exports = router;
