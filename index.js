const images = ["img/team-1.jpg", "img/team-2.jpg", "img/team-3.jpg", "img/team-4.jpg", "img/team-5.jpg","img/team-6.jpg"]; // Додайте ваші зображення

let currentImageIndex = 0;
const sliderImage = document.getElementById('first-screen_sliderImage');
const prevBtn = document.getElementById('first-screen_prevBtn');
const nextBtn = document.getElementById('first-screen_nextBtn');

function showImage(index) {
    sliderImage.src = images[index];
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }

    toggleButtonsVisibility();
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }

    toggleButtonsVisibility();
}

function toggleButtonsVisibility() {
    prevBtn.style.display = currentImageIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentImageIndex === images.length - 1 ? 'none' : 'block';
}

showImage(currentImageIndex);
toggleButtonsVisibility();
