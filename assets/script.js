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
	// ______________________________________________________________
	//  Création des bullets fulls + Implantation des bullets fulls dans l'index HTML.
	// ______________________________________________________________
	const divDots = document.querySelector(".dots");

	for (i = 0; i != bulletNumberMax; i++) {
        switch (i) {
            case imageAtTheMoment-1 :
                bulletElement = document.createElement("i");
                bulletElement.className = "dot dot_selected"; // Pour "full bullet".
                divDots.appendChild(bulletElement);
                break;
            default:
	 	        bulletElement = document.createElement("i");
	 	        bulletElement.className = "dot"; // Pour "empty bullet".
	 	        divDots.appendChild(bulletElement);
        }
	}
}

// ______________________________________________________________
// Il faut bien clear le tout (je note avoir du modifier le HTML car je n'ai su récupérer la balise <dots> nestée dans l'ID banner).
// ______________________________________________________________
function clearBullet() {
	let element = document.getElementById("dots");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

// ______________________________________________________________
// FIN DE L'ARC DES BULLETS !!
// ______________________________________________________________

// ______________________________________________________________
// DEBUT DE L'ARC DES IMAGES/TEXTS !!
// ______________________________________________________________
function imageModification() {
	let bannerImage = document.getElementsByClassName("banner-img").item(0);
	bannerImage.setAttribute("src", "./assets/images/slideshow/" + slides[imageAtTheMoment-1].image);
}

function textModification() {
	bannerText = document.querySelector(".banner-content");
	let bannerTextNew = bannerText.querySelector("p");
	bannerTextNew.innerHTML = slides[imageAtTheMoment-1].tagLine;
}

// ______________________________________________________________
// FIN DE L'ARC DES IMAGES/TEXTES.
// ______________________________________________________________

// ______________________________________________________________
// DEBUT DE L'ARC EventListener !!
// ______________________________________________________________
window.onload = (event) => {
	bulletCounter();
};

// ______________________________________________________________
// Selectionner les flèches de gauche & de droite du carrousel font changer la valeur de l'image en cours.
// ______________________________________________________________
let leftElement = document.querySelector('.arrow_left');
let rightElement = document.querySelector('.arrow_right');

leftElement.addEventListener('click', () => {
	clearBullet();
	switch (imageAtTheMoment) {
		case 1:
			imageAtTheMoment = bulletNumberMax;
			break;

		default:
			imageAtTheMoment--;
	}
	bulletCounter();
	imageModification();
	textModification();
})

rightElement.addEventListener('click', () => {
	clearBullet();
	switch (imageAtTheMoment) {
		case bulletNumberMax:
			imageAtTheMoment = 1;
			break;

		default:
			imageAtTheMoment++;
	}
	bulletCounter();
	imageModification();
	textModification();
})

// ______________________________________________________________
// FIN DE L'ARC EventListener !!
// ______________________________________________________________

// ______________________________________________________________
// Être sur que le script s'est correctement executé, sans erreur du moins, jusqu'au bout.
// ______________________________________________________________
console.log("The script goes well !");