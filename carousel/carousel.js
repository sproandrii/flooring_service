// const images = [
// `<article class="servise-card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
// <div class="img-4x3">
//     <img src="img/services/wood_floor_repairs.png" class="card-img-top" alt="Wood Floor Repair">
// </div>
// <div class="card-body">
//     <h3 class="card-title">Wood Floor Repair</h3>
//     <p class="card-text"><span>from $15</span> | per sqm</p>
// </div>
// </article>`,
// `<article class="servise-card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
// <img src="img/services/parquet_flooring_installation.png" class="card-img-top"
//     alt="Parquet Flooring Installation">
// <div class="card-body">
//     <p class="card-title">Parquet Flooring Installation</p>
//     <p class="card-text"><span>from $15</span> | per sqm</p>
// </div>
// </article>`,
// `<article class="servise-card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
// <img src="img/services/floor_polishing.png" class="card-img-top" alt="Floor Polishing">
// <div class="card-body">
//     <h3 class="card-title">Floor Polishing</h3>
//     <p class="card-text"><span>from $15</span> | per sqm</p>
// </div>
// </article>`,
// `<article class="servise-card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
// <img src="img/services/sanding_and_finishing.png" class="card-img-top" alt="Sanding & Finishing">
// <div class="card-body">
//     <h3 class="card-title">Sanding & Finishing</h3>
//     <p class="card-text"><span>from $15</span> | per sqm</p>
// </div>
// </article>`
// ];
const images = [
    'img/services/wood_floor_repairs.png',
    'img/services/parquet_flooring_installation.png',
    'img/services/floor_polishing.png',
    'img/services/sanding_and_finishing.png',
    'img/services/hardwood_flooring_installation.png',
    'img/services/floor_cleaning.png'
]
let currentIndex = 0;
function slide() {
    currentIndex = ++currentIndex > images.length - 1 ? 0 : currentIndex;
    showSlide(currentIndex);
}

setInterval(slide, 5000);

function back() {
  currentIndex = --currentIndex < 0 ? images.length - 1 : currentIndex;
  showSlide(currentIndex);
}
document.querySelector('.carousel .btn-back').addEventListener('click', back);

function next() {
    currentIndex = ++currentIndex > images.length - 1 ? 0: currentIndex;
    showSlide(currentIndex);
}
document.querySelector('.carousel .btn-next').addEventListener('click', next);

// function showSlide(idx) {
//     document.querySelector(".carousel ").innerHTML = images[idx];
// }
function showSlide(idx) {
    document.querySelector(".carousel img").src = images[idx];
}