const sideBar = document.getElementById("sidebar");
const menuIcons = document.getElementById("menu");
const main = document.getElementById("main");

menuIcons.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (
    !sideBar.contains(event.target) &&
    !menuIcons.contains(event.target) &&
    sideBar.classList.contains("open")
  ) {
    sideBar.classList.remove("open");
  }
});

// function toggleSideBar() {
//   const sideBar = document.getElementById("sidebar");
//   sideBar.classList.toggle("open");
// }
