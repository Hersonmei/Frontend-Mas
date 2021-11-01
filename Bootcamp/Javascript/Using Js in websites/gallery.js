const prevButtom = document.querySelector('.prev');
const nextButtom = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevButtom.addEventListener('click', function(){
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add('active');
    nextButtom.disabled = false;

    console.log(currentlySelected);
    
    if (currentlySelected === 0) {
        prevButtom.disabled = true;
    }
});

nextButtom.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevButtom.disabled = false;

    console.log(currentlySelected);
    
    if (galleryImgs.length === currentlySelected + 1) {
        nextButtom.disabled = true;
    }
});