const imageTrack = document.getElementById("image-track");
const imagesContainer = document.getElementById("images-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

let isDragging = false;
let startX;
let scrollLeft;

// Set the scroll fraction as a percentage of the viewport width
const scrollFraction = 81; // Adjust this value as needed (10% of the viewport width in this example)

// Calculate the scroll amount based on viewport width
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const scrollAmount = (vw * scrollFraction) / 100;

// Function to set cursor style based on drag state
const setCursorStyle = () => {
  imagesContainer.style.cursor = isDragging ? 'grabbing' : 'grab';
};

// Scroll to the left
scrollLeftButton.addEventListener("click", () => {
  imagesContainer.scrollLeft -= scrollAmount;
});

// Scroll to the right
scrollRightButton.addEventListener("click", () => {
  imagesContainer.scrollLeft += scrollAmount;
});

imageTrack.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - imagesContainer.getBoundingClientRect().left;
  scrollLeft = imagesContainer.scrollLeft;
  setCursorStyle(); // Set cursor style when dragging starts
});

imageTrack.addEventListener("mouseleave", () => {
  isDragging = false;
  setCursorStyle(); // Set cursor style when dragging ends
});

imageTrack.addEventListener("mouseup", () => {
  isDragging = false;
  setCursorStyle(); // Set cursor style when dragging ends
});

imageTrack.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX - imagesContainer.getBoundingClientRect().left;
  const walk = (x - startX) * 2; // Adjust this value to control the scrolling speed
  imagesContainer.scrollLeft = scrollLeft - walk;
});

// Initial cursor style setup
setCursorStyle();
