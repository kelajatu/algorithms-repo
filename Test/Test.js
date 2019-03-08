function addButtons(numButtons) {
  for (var i = 0; i < numButtons; i++) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Button " + (i + 1);
    button.onclick = function() {
      alert("Button " + (i + 1) + " clicked");
    };
    document.body.appendChild(button);
    document.body.appendChild(document.createElement("br"));
  }
}

window.onload = function() {
  addButtons(5);
};
