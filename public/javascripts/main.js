let noteArray = [];
let favNoteArray = [];
let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pTitle, pYear, pType) {
    this.title = pTitle;
    this.year = pYear;
    this.type = pType;
}

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {
        $.get("/getSelectedType", function(data, status) {
            selectedType = data;
            
            noteArray.push(new NoteObject(document.getElementById("title").value, document.getElementById("year").value, selectedType));
            console.log(noteArray);
            document.getElementById("title").value = "";
            document.getElementById("year").value = "";
        });
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
        createList2();
    });
    

});



function createList() {

    $.get("/getAllGames", function(data, status) {
        noteArray = data;
        var myul = document.getElementById("myList");
        myul.innerHTML = '';
    
        noteArray.forEach(function (element, i) {   // use handy array forEach method
            var li = document.createElement('li');
            li.classList.add('oneGame');
            li.innerHTML = element.title + ":  " + element.year + "  " + element.type;
            myul.appendChild(li);
        });
    
        var liList = document.getElementsByClassName('oneGame')
        console.log(liList);
    
        let newGameArray = Array.from(liList);
        newGameArray.forEach(function (element, i) {
            element.addEventListener('click', function () {
                favNoteArray.push(noteArray[i]);
            });
        });
    });
};

function createList2() {
    $.get("/getAllFavGames", function(data, status) {
        favNoteArray = data;

        var myul2 = document.getElementById("myFavoriteList");
        myul2.innerHTML = '';
    
        favNoteArray.forEach(function (element, i) {   // use handy array forEach method
            var li2 = document.createElement('li');
            li2.innerHTML = element.title + ":  " + element.year + "  " + element.type;
            myul2.appendChild(li2);
        });
    });
};