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


const carouseldom = document.querySelector('.carousel');
let carouselcnt = "";

for(i=0; i<images.length; i++){
    const imgcontainer = `<div class="image-container d-none">
                            <img class="img" src="${images[i].image}"/>
                                <div class="txt-box">
                                    <h1 id="title-txt${i}">${images[i].title}</h1>
                                    <h2 id="body-txt${i}">${images[i].text}</h2>
                                </div>
                            </div>`;   
    carouselcnt += imgcontainer;
}
    carouseldom.innerHTML = carouselcnt; 
/*Array dinamico di immagini*/
/*i Div contenenti le immagini vengono creati con class d-none*/
    let dispayedimg = 0;
    const imgcontainerdom = document.getElementsByClassName('image-container');
    imgcontainerdom[dispayedimg].classList.remove('d-none');

/*Event listener per scorrere l'array di immagini a schermo in entrambe le direzioni*/

    const nextarrowDom = document.querySelector('#arrow-ahead');
    const previousarrowDom = document.querySelector('#arrow-backwards');

    nextarrowDom.addEventListener('click', 
    function() {
        if (dispayedimg < imgcontainerdom.length - 1) {

           
            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg++;
            imgcontainerdom[dispayedimg].classList.remove('d-none');
            previousarrowDom.classList.remove('std-position');

            
        } else {
            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg=0;
            imgcontainerdom[dispayedimg].classList.remove('d-none')
         } 
    }
);


        previousarrowDom.addEventListener('click', 
        function() {
        if (dispayedimg > 0) {
            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg--;
            imgcontainerdom[dispayedimg].classList.remove('d-none');
            
            nextarrowDom.classList.remove('hide-arrow')
                
         } else {
            imgcontainerdom[dispayedimg].classList.add('d-none');
            dispayedimg=4;
            imgcontainerdom[dispayedimg].classList.remove('d-none')
        } 
     }
);


