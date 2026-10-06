//Select menu from DOM
//Add event listener
//Display links
//Make x animation

let menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener("click", (event) => {



function toggleMenuLinks(event) {

}

    let nav = document.querySelector('nav');

    if(nav.style.display === '') {
    nav.style.display = 'flex';
    }   else {
    nav.style.display = '';
    }



menuButton.classList.toggle('change');
});