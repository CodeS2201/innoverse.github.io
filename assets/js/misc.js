const scrollButton = document.getElementById('scroll-button');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  let scrollPosition = window.innerHeight + document.documentElement.scrollTop;
  let pageHeight = document.documentElement.scrollHeight;

  // Show the button until the user reaches near the bottom of the page
  if (scrollPosition < pageHeight - 100) {  // You can adjust 100 to any margin value you want
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}