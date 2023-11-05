const imageTrack = document.getElementById("image-track");
const imagesContainer = document.getElementById("images-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

let isDragging = false;
let startX;
let scrollLeft;

// Scroll to the left
scrollLeftButton.addEventListener("click", () => {
    imagesContainer.scrollLeft -= 440; // Adjust the scroll amount as needed
});

// Scroll to the right
scrollRightButton.addEventListener("click", () => {
    imagesContainer.scrollLeft += 440; // Adjust the scroll amount as needed
});

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
