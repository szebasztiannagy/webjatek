var jatekter = document.getElementById("jatekter");var leftbox = document.createElement("div");var kartyabox = document.createElement("div");var pontokbox = document.createElement("div");var tabla = document.createElement("div");var korokbox = document.createElement("div");
const  kartyaAdatok = [
    {id:1,value:-3,sign:''},{id:2,value:2,sign:''},{id:3,value:5,sign:''},{id:4,value:4,sign:''},
    {id:5,value:3,sign:''},{id:6,value:0,sign:'varazslo'},{id:7,value:-6,sign:''},{id:8,value:6,sign:''},{id:9,value:0,sign:'aranybanya'},
    {id:10,value:2,sign:''},{id:11,value:0,sign:'hegy'},{id:12,value:-5,sign:''},{id:13,value:4,sign:''},{id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},{id:16,value:6,sign:''},{id:17,value:-4,sign:''},{id:18,value:1,sign:''},{id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},{id:21,value:0,sign:'hegy'},{id:22,value:3,sign:''},{id:23,value:1,sign:''},{id:24,value:1,sign:'kek'},
    {id:25,value:2,sign:'kek'},{id:26,value:3,sign:'kek'},{id:27,value:4,sign:'kek'},{id:28,value:1,sign:'piros'},{id:29,value:2,sign:'piros'},
    {id:30,value:3,sign:'piros'},{id:31,value:4,sign:'piros'},{id:32,value:1,sign:'sarga'},{id:33,value:2,sign:'sarga'},{id:34,value:3,sign:'sarga'},
    {id:35,value:4,sign:'sarga'},{id:36,value:1,sign:'zold'},{id:37,value:2,sign:'zold'},{id:38,value:3,sign:'zold'},{id:39,value:4,sign:'zold'},]
var cellak = [];var valaszto = [];var valaszto2 = [];
function jatekterbetoltes(){
    leftbox.appendChild(kartyabox);leftbox.appendChild(pontokbox);jatekter.appendChild(leftbox);jatekter.appendChild(tabla);jatekter.appendChild(korokbox);
    leftbox.id = "balpanel";kartyabox.id="kartyabox";pontokbox.id="pontokbox";tabla.id="tabla";korokbox.id="korokbox";
    var kep = document.createElement("img");kep.src = "khata.jpg";
    kartyabox.setAttribute("onclick","kartyahuzas()");
    kartyabox.append(kep);}
function tkepborder(){
    if (vankartya == true) {
        for (let index = 0; index < 5; index++) {
            document.getElementById("tkep"+index).style.borderColor = "red"; }
    }else{
        for (let index = 0; index < 5; index++) {
            document.getElementById("tkep"+index).style.borderColor = "lime"; }}}
var generaltkepek = [];
function kartyahuzas(){
    if(vankartya == false && generaltkepek.length != 23){
        var random = Math.floor(Math.random()*23+1);
        while(generaltkepek.includes(random) == true){
            random = Math.floor(Math.random()*23+1);}
        generaltkepek.push(random);
        document.getElementById("vkep").src = "kartyak/"+random+".png";
        if(valaszto.length == 0){
            valaszto.push({src: random,kartyaAdatok: kartyaAdatok[random-1]})
        }else{
            valaszto[0] = ({src: random,kartyaAdatok: kartyaAdatok[random-1]})}
        document.getElementById("v1").style.display = "block";
        document.getElementById("kartyabox").style.borderColor = "red";
        vankartya = true;
        tpick = null;
    }else if(vankartya != true){
        document.getElementById("kartyabox").style.borderColor = "red";}
    tkepborder();}
var tpick;var tornyok = [0,0,0,0];var tornyok2 = [3,2,1,0];
function pick(div){
    tkepborder();
    if(vankartya != true){
		tpick = div.id; 
		div.style.borderColor = "fuchsia";
		if (tpick == "tkep4") {
			if(valaszto.length == 0){
				valaszto.push({src: valaszto2[0].src,kartyaAdatok: valaszto2[0].kartyaAdatok})
			}else{
				valaszto[0] = ({src: valaszto2[0].src,kartyaAdatok: valaszto2[0].kartyaAdatok})}
		}else{
			if(valaszto.length == 0){
				valaszto.push({src: 23+parseInt(tpick.slice(4))+1,kartyaAdatok: kartyaAdatok[23+parseInt(tpick.slice(4))+1-1]})
			}else{
				valaszto[0] = ({src: 23+parseInt(tpick.slice(4))+1,kartyaAdatok: kartyaAdatok[23+parseInt(tpick.slice(4))+1-1]})}}}}
var vankartya = false;var foglaltcella =[];
function cellavalasztas(div){
    if(vankartya != false || tpick != null){
        if(foglaltcella.includes(div.id) == false){
            var kep = document.createElement("img");
            kep.src = "kartyak/"+valaszto[0].src+".png";
            document.getElementById(div.id).appendChild(kep);
            let kartyaA =  Object.assign({},valaszto[0].kartyaAdatok);
            cellak.push({cellaid: div.id,src: valaszto[0].src,kartyaAdatok: kartyaA,})
            if(valaszto[0].kartyaAdatok.sign == "aranybanya"){
                banya = [Math.ceil(div.id/6)-1,(div.id-(Math.ceil(div.id/6)-1)*6)-1];
            }else if(valaszto[0].kartyaAdatok.sign == "varazslo"){
                varazslo = [Math.ceil(div.id/6)-1,(div.id-(Math.ceil(div.id/6)-1)*6)-1];
            }else if(valaszto[0].kartyaAdatok.sign == "sarkany"){
                sarkany = [Math.ceil(div.id/6)-1,(div.id-(Math.ceil(div.id/6)-1)*6)-1];}    
            foglaltcella.push(div.id);
            document.getElementById("vkep").src = "valaszto.jpg";
            vankartya = false;
            document.getElementById(div.id).style.borderColor = "red";
            document.getElementById("v1").style.display = "none";
            document.getElementById("kartyabox").style.borderColor = "lime";     
            if(tpick == "tkep4"){
                document.getElementById("tkep4").style.visibility = "hidden";
            }else if(tpick !=null){
                tornyok[parseInt(tpick.slice(4))]++;
                for (let index = 0; index < 4; index++) {
                    if(tornyok[index] >tornyok2[index]){
                        document.getElementById("tkep"+index).style.visibility = "hidden";}}}
            tpick = null;
			if(foglaltcella.length == 30){
				pontokcount();}}}
    tkepborder();}
function tablageneralas(){
    var k = 1;
    for (let index = 0; index < 5; index++) {
        var sorDiv = document.createElement("div");sorDiv.id = "sor"+index;sorDiv.classList += " sordiv";
        for (let index2 = 0; index2 < 6; index2++) {
            var oszlopDiv = document.createElement("div");oszlopDiv.classList += " oszlopdiv";oszlopDiv.setAttribute("onclick","cellavalasztas(this)");oszlopDiv.id = k;
            sorDiv.appendChild(oszlopDiv);
            k++;}
        tabla.appendChild(sorDiv);}
    var oszlopDiv = document.createElement("div");oszlopDiv.className += " toronyvalaszto";oszlopDiv.id = "v2";
    document.getElementById("valaszto").appendChild(oszlopDiv);
    var oszlopDiv = document.createElement("div");oszlopDiv.className += " kartyavalaszto";oszlopDiv.id = "v1";
    document.getElementById("valaszto").appendChild(oszlopDiv);
    for (let index = 0; index < 4; index++) {
        var kep = document.createElement("img");kep.id = "tkep"+index;kep.src = "kartyak/"+(24+index)+".png";kep.setAttribute("onclick","pick(this)");
        document.getElementById("v2").appendChild(kep);}
    var random = Math.floor(Math.random()*23+1);
    generaltkepek.push(random);
    var kep = document.createElement("img");kep.id = "tkep4";kep.src = "kartyak/"+(random)+".png";
    kep.setAttribute("onclick","pick(this)");
    document.getElementById("v2").appendChild(kep);
    valaszto2.push({src: random,kartyaAdatok: kartyaAdatok[random-1]})
    document.getElementById("v1").style.display = "none";
    var kep = document.createElement("img");kep.id = "vkep";
    document.getElementById("v1").setAttribute("onclick","pick(this)");
    document.getElementById("v1").appendChild(kep);
    for (let index = 1; index < 4; index++) {
        var oszlopDiv = document.createElement("div");oszlopDiv.className += " körök";
        var kep = document.createElement("img");kep.src = "r"+index+".png";kep.id = "k"+index;
        oszlopDiv.appendChild(kep);
        korokbox.appendChild(oszlopDiv);}
    var kep = document.createElement("img");kep.src = "c50.png";pontokbox.appendChild(kep);}
var banya;
function s_aranybanya(){
    if (banya != null) {
        for (let index1 = 0; index1 < 6; index1++) {
            if (cellaktomb[banya[0]][index1].kartyaAdatok.sign != "kek") {
                cellaktomb[banya[0]][index1].kartyaAdatok.value*=2;}}
        for (let index1 = 0; index1 < 5; index1++) {
            if (cellaktomb[index1][banya[1]].kartyaAdatok.sign != "kek") {
                cellaktomb[index1][banya[1]].kartyaAdatok.value*=2;}}}}
var varazslo;
function s_varazslo(){
    if (varazslo != null) {
        if(varazslo[0]-1 >= 0){
            if (cellaktomb[varazslo[0]-1][varazslo[1]].kartyaAdatok.sign == "kek") {
                cellaktomb[varazslo[0]-1][varazslo[1]].kartyaAdatok.value++;}}
        if(varazslo[0]+1 <= 4){
            if (cellaktomb[varazslo[0]+1][varazslo[1]].kartyaAdatok.sign == "kek") {
                cellaktomb[varazslo[0]+1][varazslo[1]].kartyaAdatok.value++;}}
        if(varazslo[1]-1 >= 0){
            if (cellaktomb[varazslo[0]][varazslo[1]-1].kartyaAdatok.sign == "kek") {
                cellaktomb[varazslo[0]][varazslo[1]-1].kartyaAdatok.value++;}}
        if(varazslo[1]+1 <= 5){
            if (cellaktomb[varazslo[0]][varazslo[1]+1].kartyaAdatok.sign == "kek") {
                cellaktomb[varazslo[0]][varazslo[1]+1].kartyaAdatok.value++;}}}}
var sarkany;
function s_sarkany(){
    if (sarkany != null) {
        for (let index1 = 0; index1 < 6; index1++) {
            if (cellaktomb[sarkany[0]][index1].kartyaAdatok.sign != "kek" && cellaktomb[sarkany[0]][index1].kartyaAdatok.value > 0) {
                cellaktomb[sarkany[0]][index1].kartyaAdatok.value = 0;}}
        for (let index1 = 0; index1 < 5; index1++) {
            if (cellaktomb[index1][sarkany[1]].kartyaAdatok.sign != "kek" && cellaktomb[index1][sarkany[1]].kartyaAdatok.value > 0) {
                cellaktomb[index1][sarkany[1]].kartyaAdatok.value = 0;}}}}
var cellaktomb = [];var penz = 0;
function pontokcount(){
    cellak.sort((a, b) => a.cellaid - b.cellaid);
    var i = 0;
    for (let index = 0; index < 5; index++) {
        var sor = [];
        for (let index1 = i; index1 < i+6; index1++) {
            sor.push(cellak[index1]);}
        cellaktomb.push(sor);
        i+=6;}
    s_sarkany();s_varazslo();s_aranybanya();
    for (let index = 0; index < 5; index++) {
        var sor = 0;
        var torony = 0;
        for (let index1 = 0; index1 < 6; index1++) {
            if(cellaktomb[index][index1].kartyaAdatok.sign == "kek"){
                torony += cellaktomb[index][index1].kartyaAdatok.value;
            }else{
                sor += cellaktomb[index][index1].kartyaAdatok.value;}}
        penz += (sor*torony);}
    for (let index = 0; index < 6; index++) {
        var oszlop = 0;
        var torony = 0;
        for (let index1 = 0; index1 < 5; index1++) {
            if(cellaktomb[index1][index].kartyaAdatok.sign == "kek"){
                torony += cellaktomb[index1][index].kartyaAdatok.value;
            }else{
                oszlop += cellaktomb[index1][index].kartyaAdatok.value;}}
        penz += (oszlop*torony);}
    coin();}
var egyenleg = 50;
function coin(){
    console.log(penz);
    if (egyenleg+penz < 0) {
        while (pontokbox.firstChild) {
            pontokbox.removeChild(pontokbox.lastChild);}
        egyenleg = 0;penz = 0;
    }else{
		penz += egyenleg;
		egyenleg = 0;
        while (pontokbox.firstChild) {
            pontokbox.removeChild(pontokbox.lastChild);}
        while(penz != 0){
            var kep = document.createElement("img");
            if (penz - 100 >= 0) {
                egyenleg +=100;penz -= 100;kep.src =  "c100.png";}
            else if (penz - 50 >= 0) {
                egyenleg +=50;penz -= 50;kep.src =  "c50.png";}
            else if (penz - 10 >= 0) {
                egyenleg +=10;penz -= 10;kep.src =  "c10.png";}
            else if (penz - 5 >= 0 ) {
                egyenleg +=5;penz -= 5;kep.src =  "c5.png";}
            else if (penz - 1 >= 0) {
                egyenleg +=1;penz -= 1;kep.src =  "c1.png";}
            pontokbox.appendChild(kep);}}
    if (kor < 3) {
        kor++;
        setTimeout(reset(), 5000);
    }else{
		setTimeout(alert("Játék vége!"), 5000);}}
var kor = 1;
function reset(){
    alert("Következő kör inditásához nyomjon az ok-ra!")
    document.getElementById("k"+kor).style.borderColor = "fuchsia";  
    for (let index = 1; index < 31; index++) {
        var cel = document.getElementById(index);
        cel.removeChild(cel.lastChild);
        cel.style.borderColor = "lime";}
    foglaltcella =[];cellak = [];valaszto = [];valaszto2 = [];cellaktomb = [];varazslo = null;banya = null;sarkany = null;generaltkepek = [];tornyok = [0,0,0,0];
    var random = Math.floor(Math.random()*23+1);
    generaltkepek.push(random);
    document.getElementById("tkep4").src = "kartyak/"+(random)+".png";
    valaszto2.push({
        src: random,kartyaAdatok: kartyaAdatok[random-1]})
    for (let index = 0; index < 5; index++) {
        document.getElementById("tkep"+index).style.visibility = "visible";}}
function main(){
    jatekterbetoltes();tablageneralas();}
main();