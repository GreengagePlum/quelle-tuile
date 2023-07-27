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
    function() { // chargement des images
        for (let i = 0; i < 16; i++) {
            if (i == 15) {
                var pathFull = "<div class='tuile' id='t0" + i + "'><p>" + i + "</p></div>";
            } else {
                var pathFull = "<div class='tuile' id='t0" + i + "'><img src='img/0" + i + ".jpg'/><p>" + i + "</p></div>";
            }
            $("#puzzlearea").append(pathFull);
            $("#t0" + i).css("order", String(i + 1));
        }

        $("#shuffle").click( // fonction pour mélanger les tuiles
            function shuffle() {
                for (let i = 0; i < 50; i++) { // choix de 50 pour suiffisamment mélanger les tuiles
                    var idNumAlea1 = alea(0,16);
                    var idNumAlea2 = alea(0,16);
                    if (idNumAlea1 == idNumAlea2) {
                        i--;
                    }
                    var idTag1 = "#t0" + idNumAlea1;
                    var idTag2 = "#t0" + idNumAlea2;
                    var ord1 = $(idTag1).css("order");
                    var ord2 = $(idTag2).css("order");
                    $(idTag1).css("order", ord2);
                    $(idTag2).css("order", ord1);
                }
            }
        );

        $(".tuile").click( // fonction pour changer la place d'une tuile avec celle de la tuile vide
            function check_and_swap() {
                var ordClicked = $(this).css("order");
                var idClicked = "#" + $(this).attr("id");
                $(".tuile").each(
                    function() { // on itere sur les 16 tuiles pour trouver celles qui ont la valeur css "order" rechercé
                        var ordMatch = $(this).css("order");
                        var idMatch = "#" + $(this).attr("id");
                        var isMatch = 0;
                        if (![1, 5, 9, 13].includes(parseInt(ordClicked))) { // trouver la tuile gauche et verifier si elle est vide
                            if (ordMatch == parseInt(ordClicked) - 1 && idMatch == "#t015") {
                                $(idClicked).css("order", ordMatch);
                                $(idMatch).css("order", ordClicked);
                                isMatch = 1;
                            }
                        }
                        if (!isMatch && ![4, 8, 12, 16].includes(parseInt(ordClicked))) { // trouver la tuile droite et verifier si elle est vide
                            if (ordMatch == parseInt(ordClicked) + 1 && idMatch == "#t015") {
                                $(idClicked).css("order", ordMatch);
                                $(idMatch).css("order", ordClicked);
                                isMatch = 1;
                            }
                        }
                        if (!isMatch && ordClicked <= 12) {
                            if (ordMatch == parseInt(ordClicked) + 4 && idMatch == "#t015") { // trouver la tuile en haut et verifier si elle est vide

                                $(idClicked).css("order", ordMatch);
                                $(idMatch).css("order", ordClicked);
                                isMatch = 1;
                            }
                        }
                        if (!isMatch && ordClicked >= 5) {
                            if (ordMatch == parseInt(ordClicked) - 4 && idMatch == "#t015") { // trouver la tuile en bas et verifier si elle est vide

                                $(idClicked).css("order", ordMatch);
                                $(idMatch).css("order", ordClicked);
                                isMatch = 1;
                            }
                        }
                        if (isMatch) { // optimisation pour ne pas contiuner à iterer et tester après avoir changé de place
                            return;
                        }
                    }
                );

                var countCorrect = 0;
                $(".tuile").each( // fonction pour vérifier l'ordre
                    function() {
                        var ord = $(this).css("order");
                        var id = $(this).attr("id");
                        if (parseInt(id.slice(1)) + 1 == parseInt(ord)) { // on verifie si les tuiles sont en ordre (css "ordre" = id + 1)
                            countCorrect++;
                            if (countCorrect == 16) { // si tout est correcte on termine le jeu
                                $("#output").append("Bien joué, vous avez gagné !");
                                $(".tuile").off("click");
                            }
                        }
                    }
                );
            }
        );
    }
);
