/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myHead").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.cnop')) {

    var heads = document.getElementsByClassName("head-content");
    var i;
    for (i = 0; i < heads.length; i++) {
      var openHead = heads[i];
      if (openHead.classList.contains('show')) {
        openHead.classList.remove('show');
      }
    }
  }
}