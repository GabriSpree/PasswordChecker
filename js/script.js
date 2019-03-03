function enter(key) {
    var keyValid = new Boolean();
    if (key == "") {
        keyValid = false;
    } else {
        keyValid = true;
    }

    if (keyValid) {} else if (!keyValid) {}
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
    document.getElementById("idlogin-part0").innerHTML = "If you have to login with your <a href='javascript:showIdLogin(true);document.getElementById(\"popup-idInput\").focus();'>ID</a> instead of your <a href='javascript:document.getElementById(\"userInput\").focus();'>ContentID</a>, ";
    document.getElementById("idlogin-part1").innerHTML = " to open the IDLogger."
    document.getElementById("link-idlogin").style.display = "inline";
  }
}

function makeKeyId(hasToSet, hasToDestroy) {
  var sKeyInput = document.getElementById("sKeyInput");
  var sKeyInput_p = document.getElementById("sKeyInput_p");
  var sKeyShower = document.getElementById("sKeyShower");

  var stext = "";
  var stext2 = "";
  var spossible = "AbCdEfGhIjKlMnOpQrStUvWxYzaBcDeFgHiJkLmNoPqRsTuVwXyZ7946281305";

  if (hasToSet) {

    for (var r0 = 0; r0 < 120; r0++) {
      stext += spossible.charAt(Math.floor(Math.random() * spossible.length));
    }

    sKeyInput.value = stext;
    sKeyInput_p.value = stext;

    for (var r0 = 0; r0 < 10; r0++) {
      stext2 += spossible.charAt(Math.floor(Math.random() * spossible.length));
    }

    sKeyShower.innerHTML = stext2;

  } else if (hasToDestroy) {

    sKeyInput.value = "";
    sKeyInput_p.value = "";
    sKeyShower.innerHTML = "";

  }
}

setInterval(function(){makeKeyId(false,true);makeKeyId(true,false)}, 10);

dragElement(document.getElementById("popup"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("popup")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("popup" + "-sub").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown(elmnt);
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement(elmnt);
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag(elmnt);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
