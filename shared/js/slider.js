let slider = document.getElementsByClassName("slider")[0];
let slider_accent = document.getElementsByClassName("slider-accent")[0];
let slider_toggle = document.getElementsByClassName("slider-toggle")[0];
slider_toggle.onclick = toggle;

function toggle() {
  if (slider_toggle.classList.contains("light")) {
    slider.classList.replace("light", "dark");
    slider_accent.classList.replace("light", "dark");
    slider_toggle.classList.replace("light", "dark");
  } else {
    slider.classList.replace("dark", "light");
    slider_accent.classList.replace("dark", "light");
    slider_toggle.classList.replace("dark", "light");
  }
}
