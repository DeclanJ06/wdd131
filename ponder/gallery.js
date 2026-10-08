//1. Grab our HTML elements
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

//2. Add an event listener, when img clicked open modal
gallerySection.addEventListener('click', (event) => {
    
    if(event.target.src !== undefined) {
     console.log(event.target.src);

    // Display modal
    modal.showModal();
    // set the src image of modal
    modalImg.src = event.target.src.replace("-sm", "-full");
    
    }  
});

//3. Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    });

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});