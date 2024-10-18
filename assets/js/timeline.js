(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
      const element = document.querySelector(hash);
      if (element) {
          // Highlight the span
          element.classList.add('highlight');
          
          // Highlight the parent div
          const parentDiv = element.closest('div'); // Change 'div' to the appropriate parent selector if necessary
          if (parentDiv) {
              parentDiv.classList.add('highlight-div');
          }
          
          // Optionally remove highlights after a delay
          setTimeout(() => {
              element.classList.remove('highlight');
              if (parentDiv) {
                  parentDiv.classList.remove('highlight-div');
              }
          }, 3000); // Highlight for 3 seconds
      }
  }
});