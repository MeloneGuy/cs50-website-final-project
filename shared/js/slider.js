let slider = document.getElementsByClassName("slider")[0];
let slider_accent = document.getElementsByClassName("slider-accent")[0];
let slider_toggle = document.getElementsByClassName("slider-toggle")[0];
let dayText = document.getElementById("day-text");
let nightText = document.getElementById("night-text");

slider_toggle.onclick = toggle;

function toggle() {
  if (slider_toggle.classList.contains("light")) {
    // Replaces slider.light to slider.dark theme
    slider.classList.replace("light", "dark");
    slider_accent.classList.replace("light", "dark");
    slider_toggle.classList.replace("light", "dark");

    // When switched to "light" activates all day text
    dayText.classList.add("hidden");
    nightText.classList.remove("hidden");
  } else {
    // Replaces slider.dark to slider.light theme
    slider.classList.replace("dark", "light");
    slider_accent.classList.replace("dark", "light");
    slider_toggle.classList.replace("dark", "light");

    // When switched to "dark" activates all night text
    dayText.classList.remove("hidden");
    nightText.classList.add("hidden");
  }
}
