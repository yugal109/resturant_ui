const sectionAbout = document.getElementById("gtco-welcome");
const aboutButton = document.getElementById("about");
const sectionMenu = document.getElementById("gtco-menu");
const menuButton = document.getElementById("menu");
const sectionTeam = document.getElementById("gtco-team");
const teamButton = document.getElementById("team");
const tagVideo = document.getElementById("tagVideo");
// Get the modal
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  tagVideo.pause();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    tagVideo.pause();
  }
};

aboutButton.addEventListener("click", function () {
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});

menuButton.addEventListener("click", function () {
  sectionMenu.scrollIntoView({ behavior: "smooth" });
});

teamButton.addEventListener("click", function () {
  sectionTeam.scrollIntoView({ behavior: "smooth" });
});
