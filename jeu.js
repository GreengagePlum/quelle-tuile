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
            if (i == 15) {
                var pathFull = "<div class='tuile' id='t0" + i + "'><p>" + i + "</p></div>";
            } else {
                var pathFull = "<div class='tuile' id='t0" + i + "'><img src='img/0" + i + ".jpg'/><p>" + i + "</p></div>";
            }
            // alert(pathFull);
            $("#puzzlearea").append(pathFull);

            var idTag = "#t0" + i;
            // alert(idTag);
            $(idTag).css("order", String(i + 1));
            // alert($(idTag).css("order"));
        }
        // $("#t015").css("order", "1");
        // $("#t00").css("order", "16");

        $("#shuffle").click(
            function shuffle() {
                for (let i = 0; i < 50; i++) {
                    var n = alea(0,16);
                    var m = alea(0,16);
                    if (n == m){
                        i--;
                    }
                    var idTag1 = "#t0" + n;
                    var idTag2 = "#t0" + m;
                    var ord1 = $(idTag1).css("order");
                    var ord2 = $(idTag2).css("order");
                    $(idTag1).css("order", ord2);
                    $(idTag2).css("order", ord1);
                }
            }
        );

        $(".tuile").click(
            function check_and_swap() {
                alert("The order value of clicked element is (" + $(this).css("order") + ")");
                // à contiunuer d'ici...
            }
        );
    }
);

// var tuileOrd = $("#t015").css("order");
// var tuileNum = $("#t015 p").text();
// var tuileOrd2 = getComputedStyle(document.getElementById("t015")).getPropertyValue("order");
// alert(String(tuileOrd));
// alert(String(tuileNum));


