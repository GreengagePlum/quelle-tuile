/*
NOM : ERKEN
Prénom : Efe

NOM : GÖKAL
Prénom : İlber

*/

function alea(min, max){ // [0;15[
    return Math.floor((Math.random()*(max-min))+min)
}

$(document).ready(
    function() {
        for (let i = 0; i < 16; i++) {
            var pathFull = "<div class='tuile'><img src='img/0" + i + ".jpg'/><p>" + i + "</p></div>";
            // alert(pathFull);
            $("#puzzlearea").append(pathFull);
        }
    }
);
