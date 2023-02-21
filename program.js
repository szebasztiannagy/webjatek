var jatekter = document.getElementById("jatekter");

var leftbox = document.createElement("div")
var kartyabox = document.createElement("div")
var pontokbox = document.createElement("div")
var tabla = document.createElement("div")
var korokbox = document.createElement("div")

var kartyaAdatok = [
    {id:1,value:-3,sign:''},
    {id:2,value:2,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:4,sign:''},
    {id:5,value:3,sign:''},
    {id:6,value:0,sign:'pap'},
    {id:7,value:-6,sign:''},
    {id:8,value:6,sign:''},
    {id:9,value:0,sign:'taliga'},
    {id:10,value:2,sign:''},
    {id:11,value:0,sign:'hegy'},
    {id:12,value:-5,sign:''},
    {id:13,value:4,sign:''},
    {id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},
    {id:16,value:6,sign:''},
    {id:17,value:-4,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},
    {id:21,value:1,sign:'hegy'},
    {id:22,value:3,sign:''},
    {id:23,value:1,sign:''},   
    
    {id:24,value:1,sign:'kek'},
    {id:25,value:2,sign:'kek'},
    {id:26,value:3,sign:'kek'},
    {id:27,value:4,sign:'kek'},

    {id:28,value:1,sign:'piros'},
    {id:29,value:2,sign:'piros'},
    {id:30,value:3,sign:'piros'},
    {id:31,value:4,sign:'piros'},

    {id:32,value:1,sign:'sarga'},
    {id:33,value:2,sign:'sarga'},
    {id:34,value:3,sign:'sarga'},
    {id:35,value:4,sign:'sarga'},

    {id:36,value:1,sign:'zold'},
    {id:37,value:2,sign:'zold'},
    {id:38,value:3,sign:'zold'},
    {id:39,value:4,sign:'zold'},    
]

var cellak = [
]





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
        sorDiv.id = "sor"+index;
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

        cellak.push({
            cellaid: random2,
            kartyaadatok: kartyaAdatok[random1-1]
        });
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
        cellak.push({
            cellaid: random2,
            kartyaadatok: kartyaAdatok[22+random1]
        });
        cella.appendChild(kep)
    }
    cellak.sort((a, b) => a.cellaid - b.cellaid);
    console.log(cellak);

    
    
}
function pontokcount(){
    var i = 0;
    for (let index = 0; index < 5; index++) {
        var sor = 0;
        for (let index1 = i; index1 < i+6; index1++) {
            sor += cellak[index1].kartyaadatok.value;
        }
        i+=6
        console.log(index,". sor:",sor);
    }

    var i = 0;
    for (let index = 0; index < 6; index++) {
        var oszlop = 0;
        for (let index1 = i; index1 < i+6*5; index1+=6) {
            oszlop += cellak[index1].kartyaadatok.value;
        }
        i++;
        console.log(index,". oszlop:",oszlop);
    }
}

function main(){
    jatekterbetoltes();
    jatekterelrendezes();
    tablageneralas();
    tablafeltoltes();
    pontokcount();
}

main();