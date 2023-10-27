// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Callback function for the Intersection Observer
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove the 'showing' class (if it was added previously)
      entry.target.classList.remove('showing');

      // Delay adding the 'showing' class
      setTimeout(() => {
        entry.target.classList.add('showing');
      }, 500); // 500 milliseconds (0.5 seconds) delay, matching the CSS delay
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust this value to control when the fade-in happens
};
const observer = new IntersectionObserver(handleIntersect, options);

// Target the element and start observing
const elementToObserve = document.querySelector('.fade-in');
if (elementToObserve) {
  observer.observe(elementToObserve);
}
