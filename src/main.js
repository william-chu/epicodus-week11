import './styles.css';

// Get the modal
var menuModal = document.getElementById('menu-modal');

// Get the button that opens the modal
var menuBtn = document.getElementById("menu-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
menuBtn.onclick = function() {
  menuModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  menuModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == menuModal) {
    menuModal.style.display = "none";
  }
}
