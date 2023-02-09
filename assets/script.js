// ______________________________________________________________
// Le contenu du carrousel dans une constante.
// ______________________________________________________________
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ______________________________________________________________
// Variable de l'image en cours d'affichage.
// ______________________________________________________________
let imageAtTheMoment = 1;

// ______________________________________________________________
// DEBUT DE L'ARC DES BULLETS !!
// ______________________________________________________________

const bulletNumberMax = slides.length;
bulletEmpty = bulletNumberMax - imageAtTheMoment;
let bulletElement;

// ______________________________________________________________
// La fonction qui permet de savoir où nous en sommes avec les bullets.
// ______________________________________________________________
function bulletCounter() {
	console.log("Nous en sommes à l'image numéro " + imageAtTheMoment + ".");
	console.log("Ce qui vouloir dire que " + imageAtTheMoment + " bille(s) pleine(s) et " + bulletEmpty + " bille(s) vide(s).");

	// ______________________________________________________________
	//  Création des bullets fulls + Implantation des bullets fulls dans l'index HTML.
	// ______________________________________________________________
	const divDots = document.querySelector(".dots");
	for (i = 0; i != imageAtTheMoment; i++) {
		bulletElement = document.createElement("i");
		bulletElement.className = "dot dot_selected"; // Pour "full bullet".
		divDots.appendChild(bulletElement);
	}
	for (o = 0; o != bulletEmpty; o++) {
		bulletElement = document.createElement("i");
		bulletElement.className = "dot"; // Pour "empty bullet".
		divDots.appendChild(bulletElement);
	}
}

// ______________________________________________________________
// Il faut bien clear le tout (je note avoir du modifier le HTML car je n'ai su récupérer la balise <dots> nestée dans l'ID banner).
// ______________________________________________________________
function clearBullet() {
	console.log("La function est bien appelée !");;

	let element = document.getElementById("dots");
	console.log("Elle tente de selectionner les balises DOTS !");

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	console.log("Execution complète de la function, est-ce que ça a fonctionné ?");
}

// ______________________________________________________________
// FIN DE L'ARC DES BULLETS !!
// ______________________________________________________________

// ______________________________________________________________
// DEBUT DE L'ARC DES IMAGES/TEXTES !!
// ______________________________________________________________

// ______________________________________________________________
// FIN DE L'ARC DES IMAGES/TEXTES.
// ______________________________________________________________

// ______________________________________________________________
// DEBUT DE L'ARC EventListener !!
// ______________________________________________________________
window.onload = (event) => {
	bulletCounter();
	console.log('La page à chargé complétement et donc bulletCounter a été appelée.');
};

// ______________________________________________________________
// Selectionner les flèches de gauche & de droite du carrousel font changer la valeur de l'image en cours.
// ______________________________________________________________
let leftElement = document.querySelector('.arrow_left');
let rightElement = document.querySelector('.arrow_right');

leftElement.addEventListener('click', () => {
	console.log('Ceci est un click sur la flèche de gauche.');
	switch (imageAtTheMoment) {
		case 1:
			clearBullet();
			imageAtTheMoment = bulletNumberMax;
			console.log('.');
			break;

		default:
			clearBullet();
			imageAtTheMoment--;
			console.log("On est désormais à l'image " + imageAtTheMoment + ".");
	}
	bulletEmpty = bulletNumberMax - imageAtTheMoment;
	bulletCounter();
})

rightElement.addEventListener('click', () => {
	console.log('Ceci est un click sur la flèche de droite.');
	switch (imageAtTheMoment) {
		case bulletNumberMax:
			clearBullet();
			imageAtTheMoment = 1;
			break;

		default:
			clearBullet();
			imageAtTheMoment++;
			console.log("On est désormais à l'image " + imageAtTheMoment + ".");
	}
	bulletEmpty = bulletNumberMax - imageAtTheMoment;
	bulletCounter();
})

// ______________________________________________________________
// FIN DE L'ARC EventListener !!
// ______________________________________________________________

// ______________________________________________________________
// Être sur que le script s'est correctement executé, sans erreur du moins, jusqu'au bout.
// ______________________________________________________________
console.log("Le script semble s'être bien éxecuté à l'ouverture !");
console.log("Ecrit par Victor CASSINA, je le JURE !");