const alert=()=>{
swal({
  title: "Compte bloquer",
  text: "Remplissez les conditions pour reactiver votre Compte",
  icon: "warning",
  dangerMode: true,
})}


const alert1=()=>{
swal({
  title: "erreur",
  text: "virement refuser",
  icon: "error",
  dangerMode: true,
})}

var btn = document.getElementById('button');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;


/*var inputElt = document.getElementById('input');
var inputElt1 = document.getElementById('input1');
var inputElt2 = document.getElementById('input2');
var inputElt3 = document.getElementById('input3');

var btn = document.getElementById('button');
// on commence par desactiver le bouton quand le javascript se charge
btn.disabled = true;
btn.style.backgroundColor = "gray";
// ajout d'une fonction appelee des qu'une touche est enfoncee
function isCharSet() {
  // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
  if (inputElt.value != "" && inputElt1.value != "" && inputElt2.value != "" && inputElt3.value != "") {
	btn.disabled = false;
	btn.style.backgroundColor = "#347780";
  } else {
	btn.disabled = true;
  }  
}*/
