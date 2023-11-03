// Get the image element by its ID
const pandaImage = document.getElementById("pandaImage");

// Add an event listener to prevent the context menu
pandaImage.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});