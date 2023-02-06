var jatekTer = dosument.getElementId("jatekTer");

var baloldal = doocument.createElement("div");
var kartyadoboz = doocument.createElement("div");
var pontdoboz = doocument.createElement("div");
var tabla = doocument.createElement("div");
var korokdoboz = doocument.createElement("div");

baloldal.appendChild(kartyadoboz);
baloldal.appendChild(pontdoboz);
jatekTer.appendChild(baloldal);
jatekTer.appendChild(tabla);
jatekTer.appendChild(korokdoboz);

kartyadoboz.innerHTML = "kartyadoboz";
pontdoboz.innerHTML = "pontdoboz";
tabla.innerHTML = "tabla";
korokdoboz = "korokdoboz";