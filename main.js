/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }, 2200);

});


/* ==========================================
   MARAUDER'S MAP
========================================== */

const mapButton = document.getElementById("mapButton");
const mapOverlay = document.getElementById("mapOverlay");
const closeMap = document.getElementById("closeMap");

mapButton.addEventListener("click", () => {

    mapOverlay.classList.add("active");

});

closeMap.addEventListener("click", () => {

    mapOverlay.classList.remove("active");

});


/* Close map when clicking outside */

mapOverlay.addEventListener("click", (event) => {

    if (event.target === mapOverlay) {

        mapOverlay.classList.remove("active");

    }

});


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        mapOverlay.classList.remove("active");

    }

});