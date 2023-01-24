

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées :
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle :
    today = new Date();

    // Récupérer l'année :
    annee = today.getFullYear();

    // récuperer le mois :
    listeMois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septempre", "Octobre", "Novembre", "Decembre"];
    mois = listeMois[today.getMonth()];

    // on récupere le numero du jour du mois :
    jourNumero = today.getDate(); //donne la date du jour

    // On récupere le jour.
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay() donne index 6 le samedi

    // Afficher les heures, minutes et secondes toujours avec deux chiffres :
    deuxChiffres = function(element){
        if (element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récuperer les heures :
    heures = deuxChiffres(today.getHours());

    // Récupere les minutes :
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes :
    secondes = deuxChiffres(today.getSeconds());

    // Afficher dans la DIV du HTML :
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + "," + jourNumero + " " + mois + " " + annee;

    // afficher toutes les 1000 ms, soit toutes les secondes :
    setTimeout(affichageHeure, 1000);

}

//Lancer la fonction une fois au début :
affichageHeure();