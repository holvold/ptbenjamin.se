//-------

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const linkedElems = document.getElementsByClassName("elems")[2]
const linkedElems0 = document.getElementsByClassName("elems")[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

linkedElems.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

linkedElems0.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
//-------

// // Get the modal
// var modal = document.getElementById("myModal0");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn0");

// // Get the <span> element that closes the modal
// var span = document.getElementById("close0");

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }