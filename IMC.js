let saisieU = document.querySelectorAll('input[type="number"]');
let resultats = document.querySelector('#result'); 
let couleurResultat = document.querySelector(".resultat");

let btn = document.querySelector("#envoyer"); 

// Envoi du formulaire et récupération des fonctions: 
btn.addEventListener("click", function(e){
    e.preventDefault(); 
    
    let IMCArrondi = calculIMC(); 
    resultats.innerHTML = ` Votre IMC est de ${IMCArrondi}<br>`; 
    affichageResultats(IMCArrondi); 
}) 

// Affichage des résultats 
function affichageResultats(IMCArrondi){

    if (IMCArrondi >= 40){
        resultats.innerHTML = "obésité morbide";
        couleurResultat.style.backgroundColor = "red"; 
        }
        else if (IMCArrondi >= 35 && IMCArrondi<=39){
        resultats.innerHTML = "obésité sévère";
        couleurResultat.style.backgroundColor = "orange"; 
        }
        else if (IMCArrondi >= 25 && IMCArrondi <= 34){
        resultats.innerHTML = "obésité";
        couleurResultat.style.backgroundColor = "yellow"; 
        }
        else if (IMCArrondi >= 18 && IMCArrondi <= 24){
        resultats.innerHTML = "poids normal";
        couleurResultat.style.backgroundColor = "green"; 
        }
        else if (IMCArrondi < 18)
        {resultats.innerHTML = "Maigreur";
        couleurResultat.style.backgroundColor = "blue"; }
}


function calculIMC (){
    // calculer l'IMC (IMC = poids / (taille * taille) => taille en mètre 
    let saisie_taille = saisieU[0].value;
    let saisie_poids = saisieU[1].value;
    let taille_en_metres = saisie_taille /100; 
    let IMC = saisie_poids / (taille_en_metres * taille_en_metres); 

    let IMCArrondi = IMC.toFixed(2); 
    return IMCArrondi;
}


