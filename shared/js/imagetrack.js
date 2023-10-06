const imageTrack = document.getElementById("image-track");
const imagesContainer = document.getElementById("images-container");
let isDragging = false;
let startX;
let scrollLeft;

imageTrack.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - imagesContainer.offsetLeft;
    scrollLeft = imagesContainer.scrollLeft;
});

imageTrack.addEventListener("mouseleave", () => {
    isDragging = false;
});

imageTrack.addEventListener("mouseup", () => {
    isDragging = false;
});

imageTrack.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - imagesContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this value to control the scrolling speed
    imagesContainer.scrollLeft = scrollLeft - walk;
});