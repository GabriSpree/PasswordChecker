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
    document.getElementById("idlogin-part0").innerHTML = "IDLogger is opened >";
    document.getElementById("idlogin-part1").innerHTML = "";
    document.getElementById("link-idlogin").style.display = "none";
  } else if (!hasToShowPopup) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("idlogin-part0").innerHTML = "If you have to login with your ID instead of your ContentID, ";
    document.getElementById("idlogin-part1").innerHTML = " to open the IDLogger."
    document.getElementById("link-idlogin").style.display = "inline";
  }
}
