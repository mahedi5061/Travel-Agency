//navbar
const navbar = document.querySelector(".header .navbar");
document.querySelector("#nav-menu").onclick = () => {
  navbar.classList.toggle("active");
};

//images slide
const control = document.querySelectorAll(
  ".about .video-container .controls .control-btn"
);

control.forEach((btn) => {
  btn.onclick = () => {
    let src = btn.getAttribute("data-src");
    document.querySelector(".about .video-container .video").src = src;
  };
});
