// Question: How could you implement moveLeft animation?

// Answer: Use setInterval that will place the element to the left position by some pixels in every 10ms. Hence, you will see the element moving towards the desired position. When you call setInterval, it returns a timeId. After reaching the desired location, you have to clear the time interval so that function will not be called again and again in every 10ms.

function moveLeft(el, distance) {
  var left = 0;

  function frame() {
    left++;
    el.style.left = left + "px";

    if (left === distance) {
      clearInterval(timeId);
    }
  }

  var timeId = setInterval(frame, 10); // draws every 10s
}
