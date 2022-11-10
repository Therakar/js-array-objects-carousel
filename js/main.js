"use strict"

//array contenente gli oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//UTILITY
let currentImageIndex = 4;
const selctedImgContainer = document.getElementById("selected-img-container"); //richiamo container delle immagini selezionate
const carouselImgContainer = document.getElementById("carousel-container"); //richiamo container delle immagini del carousel

//clono il template delle immagini selezionate
const templateSelected = document.getElementById('selected-obj-template').content.cloneNode(true);
//compilazione HTML
templateSelected.querySelector('img').src = images[currentImageIndex].image; //compila l'src dell'immagine
templateSelected.querySelector('img').alt = images[currentImageIndex].title; //compila l'alt dell'immagine    
templateSelected.querySelector('.image-text h2').innerHTML = images[currentImageIndex].title; //compila l'h2 
templateSelected.querySelector('.image-text p').innerHTML = images[currentImageIndex].text; //compila il p

selctedImgContainer.append(templateSelected);

//ciclo forEach
images.forEach((elm, index) => {
    // clona template carosello
    const templateCarousel = document.getElementById('carousel-img-template').content.cloneNode(true);
    
    //SE l'index dell'elemnto dell'array è uguale al currentImageIndex allora assegno la classe 'active' all'elemento selezionato
    if( index === currentImageIndex){
        templateCarousel.querySelector('.item').classList.add('active');
    }

    //compilazione HTML
    templateCarousel.querySelector('img').src = elm.image; //compila l'src dell'immagine
    templateCarousel.querySelector('img').alt = elm.title; //compila l'alt dell'immagine   
    carouselImgContainer.append(templateCarousel); 
});

// ciclo for
// for (let i = 0; i < images.length; i++){
//     const image = images[i];
//     //clona template carosello
//     const templateCarousel = document.getElementById('carousel-img-template').content.cloneNode(true);
    
//     //compilazione HTML
//     templateCarousel.querySelector('img').src = images[i].image; //compila l'src dell'immagine
//     templateCarousel.querySelector('img').alt = images[i].title; //compila l'alt dell'immagine   
//     carouselImgContainer.append(templateCarousel); 
// };   