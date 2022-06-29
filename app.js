let arrayImg = [
    {
        nom : "Télé",
        acces : './assets/images/img1.jpeg',
        prix : ""
    },
    {
        nom : "Téléphone",
        acces : './assets/images/img2.png',
        prix : ""
    },
    {
        nom : "Chaise",
        acces : './assets/images/img3.avif',
        prix : ""

    },
    {
        nom : "Table",
        acces : './assets/images/img4.jpeg',
        prix : ""
    },
    {
        nom : "PC",
        acces : './assets/images/img5.jpg',
        prix : ""
    }
]

let reponse;
let prixRand;
let nbEssaie = 10;
let arrReset = ['./assets/images/intero.webp'];
let essaie = document.getElementById('essaie');
let prixObjet = document.getElementById('prixObj');
let btnDemSuiv = document.getElementById('btn');
let objImg = document.getElementById('images');
let prixReel = document.getElementById('justePrix');
let nomObj = document.getElementById('nomObjet');
const BTNSUIV = document.getElementById('devPrix');

function imgRandom() { // gère les images et le prix aléatoire
  
    let numImg = Math.floor(Math.random() * arrayImg.length); //images aléatoires
    btnDemSuiv.innerText = 'Suivant'; //le bouton démarrer devient suivant 
    objImg.src = arrayImg[numImg].acces //chemin d'accès aux images
    nomObj.textContent = arrayImg[numImg].nom; //afficher le nom de l'objet qui correspond à l'image
    prixRand = Math.floor(Math.random() * 100 + 1); //prix aléatoire
    console.log(prixRand);
    nbEssaie = 10; // réinitialise le nb d'essaie si l'utilisateur recommence
    essaie.innerText = "";  // réinitialise le texte nb d'essaie si l'utilisateur recommence
    prixReel.innerText = "";  //réinitialise le texte du prix si l'utilisateur recommence
    BTNSUIV.disabled = false; // réactive le boutton si l'utilisateur recommence
} 

function devinePrix() { // gère l'affichage

    reponse = document.getElementById('repUser').value; //recupère la saisit de l'utilisateur 

        
        if (reponse == prixRand) {
            document.getElementById('reponse').innerText = "Bravo";
        } else {
            document.getElementById('reponse').innerText = "Essaye encore";
        }
    
        if (reponse != prixRand) {
        nbEssaie = nbEssaie -1;
        essaie.innerText = "Plus que " + nbEssaie + " tentavive(s)";
        } 
    
        if (nbEssaie == 0) {
            prixReel.innerText = "Perdu, le juste prix était de " + prixRand + " euros";
            document.getElementById('reponse').innerText = "";
            redemarrer()
        } 
}

function redemarrer() { // gère le changement d'affichage si l'utilisateur recommence la partie

    if (nbEssaie == 0) {
        btnDemSuiv.innerText = "Recommencer"
        objImg.src = arrReset;
        nomObj.innerText = "";
    } 

    BTNSUIV.disabled = true; // désactive le bouton 

}

btn.addEventListener('click', imgRandom, false)
devPrix.addEventListener('click', devinePrix,false)
