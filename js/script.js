function enter(key) {
    var keyValid = new Boolean();
    if (key == "") {
        keyValid = false;
    } else {
        keyValid = true;
    }

    if (keyValid == true) {} else if (keyValid == false) {}
}

// For *IdLogin entering program
function showIdLogin(hasToShowPopup) {
  if (hasToShowPopup) {
    document.getElementById("popup").style.display = "block";
  } else if (!hasToShowPopup) {
    document.getElementById("popup").style.display = "none";
  }
}
