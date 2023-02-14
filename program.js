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
            oszlopDiv.classList += " oszlopdiv";
            oszlopDiv.id = k    ;
            sorDiv.appendChild(oszlopDiv);
            k++;
        }
        sorDiv.classList += " sordiv"
        tabla.appendChild(sorDiv);
    }
}

function tablafeltoltes(){
    const kepek = [];
    const box = [];
    const kepek2 = [];
    for (let index = 0; index < 23; index++) {
        var random1 = Math.floor(Math.random()*23+1);
        var random2 = Math.floor(Math.random()*30+1);
        var kep = document.createElement("img");

        while(kepek.includes(random1) == true){
            random1 = Math.floor(Math.random()*23+1);
        }
        kep.src = "kartyak/"+random1+".png";
        kepek.push(random1);

        while(box.includes(random2) == true){
            random2 = Math.floor(Math.random()*30+1);
        }
        var cella = document.getElementById(random2);
        box.push(random2);


        cella.appendChild(kep)
    }

    while(box.length != 30){
        var random2 = Math.floor(Math.random()*30+1);

        var random1 = Math.floor(Math.random()*16+1);
        var kep = document.createElement("img");

        while(kepek2.includes(random1) == true){
            random1 = Math.floor(Math.random()*16+1);
        }
        kep.src = "kartyak/t"+random1+".png";
        kepek2.push(random1);
        while(box.includes(random2) == true){
            random2 = Math.floor(Math.random()*30+1);
        }
        var cella = document.getElementById(random2);
        box.push(random2);

        cella.appendChild(kep)
    }

    
    
}

function main(){
    jatekterbetoltes();
    jatekterelrendezes();
    tablageneralas();
    tablafeltoltes();
}

main();