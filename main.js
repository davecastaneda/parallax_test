const parallax = document.getElementById("parallax");
const parallaxTwo = document.getElementById("bkdsparallax");


window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallaxTwo.style.backgroundPositionY = offset * 1.5 + "px";
})