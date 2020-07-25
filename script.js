const changeIcon = (id) => {
    const item = document.getElementById(id);
    const currentName = item.classList[1];
    const playBar = document.getElementById('play-bar');
    if (currentName === 'fa-play') {
        item.classList.remove('fa-play');
        item.classList.add('fa-pause');
        console.log(playBar);
        playBar.style.display = 'block';
    } 
    else {
        item.classList.remove('fa-pause');
        item.classList.add('fa-play');
        playBar.style.display = 'none';
    }
};

var slideIndex = 1;
showSlides(slideIndex);
showSlides1(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlides1(n) {
    showSlides1(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function currentSlide1(n) {
    showSlides1(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}