var jatekter = document.getElementById("jatekter");

var leftbox = document.createElement("div")
var kartyabox = document.createElement("div")
var pontokbox = document.createElement("div")
var tabla = document.createElement("div")
var korokbox = document.createElement("div")



function jatekterbetoltes(){
    leftbox.appendChild(kartyabox);
    leftbox.appendChild(pontokbox);

    jatekter.appendChild(leftbox);
    jatekter.appendChild(tabla);
    jatekter.appendChild(korokbox);

    kartyabox.innerHTML = "kartyabox";
    pontokbox.innerHTML = "pontok";
    tabla.innerHTML = "tabla";
    korokbox.innerHTML = "korok";
}

function jatekterelrendezes(){
    leftbox.id = "balpanel";
    kartyabox.id="kartyabox";
    pontokbox.id="pontokbox";
    tabla.id="tabla";
    korokbox.id="korokbox"
}

function tablageneralas(){
    var k = 1;
    for (let index = 0; index < 5; index++) {
        var sorDiv = document.createElement("div");
        for (let index2 = 0; index2 < 6; index2++) {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += " oszlopdiv"
            sorDiv.appendChild(oszlopDiv);
            k++;
        }
        sorDiv.classList += " sordiv"
        tabla.appendChild(sorDiv);
    }
}

function tablafeltoltes(){
    
}

function main(){
    jatekterbetoltes();
    jatekterelrendezes();
    tablageneralas();
    tablafeltoltes();
}

main();