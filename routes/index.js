var express = require('express');
var router = express.Router();

let serverNoteArray = [];
let serverFavNoteArray = [];
let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pTitle, pYear, pType) {
    this.title = pTitle;
    this.year = pYear;
    this.type = pType;
}

serverNoteArray.push(new NoteObject("Destiny", "2014", "FPS"));
serverNoteArray.push(new NoteObject("Destiny 2", "2017", "FPS"));
serverNoteArray.push(new NoteObject("Portal 2", "2011", "FPS"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

// update game data
router.get("/getSelectedType", function(req, res) {
  res.status(200).json(selectedType)
});

// update game data
router.get("/getAllGames", function(req, res) {
  res.status(200).json(serverNoteArray)
});

// update game data
router.get("/getAllFavGames", function(req, res) {
  res.status(200).json(serverFavNoteArray)
});

// add new note
router.post('/add', function(req, res) {
  const newGame = req.body;
  console.log(newGame);
  serverNoteArray.push(newGame);
  var response = {
    status  : 200,
    success : 'Added successfully'
  }
  res.end(JSON.stringify(response));
});

// add new favorite note
router.post('/favorites', function(req, res) {
  const newFavGame = req.body;
  console.log(newFavGame);
  serverFavNoteArray.push(newFavGame);
  var response = {
    status  : 200,
    success : 'Added successfully'
  }
  res.end(JSON.stringify(response));
});

module.exports = router;
