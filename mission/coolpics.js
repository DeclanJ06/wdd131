let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('#image-viewer');
let modalImg = document.querySelector('#full-image');
const closeButton = modal.querySelector('.close-viewer');

gallerySection.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        modalImg.src = event.target.src.replace("-sm.jpg", "-full.jpg");
        modalImg.alt = event.target.alt;
        modal.showModal();
    }
});

closeButton.addEventListener('click', () => {
    modal.close();
    });

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
