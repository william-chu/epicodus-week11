import './styles.css';

let menuModal = document.getElementById('menu-modal');
let menuBtn = document.getElementById("menu-button");
let searchModal = document.getElementById('search-modal');
let searchBtn = document.getElementById('search-button');
let closeModal = document.getElementsByClassName("close-modal");
var mainContainer = document.getElementById('main-container');


// When the user clicks on the button, open the modal
menuBtn.onclick = function() {
  menuModal.style.display = "block";
  mainContainer.className = "blur";
}
searchBtn.onclick = function() {
  searchModal.style.display = "block";
  mainContainer.className = "blur";
}

// When the user clicks on <span> (x), close the modal
closeModal[0].onclick = function() {
  menuModal.style.display = "none";
  mainContainer.className = "";
}
closeModal[1].onclick = function() {
  searchModal.style.display = "none";
  mainContainer.className = "";
}
