const compteur =document.getElementById("compteur");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.onclick = () => {
    // quand on clique sur le bouton...
    compteur.innerText = parseInt(compteur.innerText) + 1;
};

dec.onclick = () => {
    if (compteur.innerText == 0){
        compteur.innerText = parseInt(compteur.innerText) - 1;
    }
};