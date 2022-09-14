function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}


// Make the DIV element draggable:
for (let items in document.getElementsByClassName("drag")) {
    dragElement(document.getElementsByClassName("drag")[items]);
}


function dragElement(elmnt) {
  const originalTop = elmnt.offsetTop
  const originalLeft = elmnt.offsetLeft
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let rect = elmnt.getBoundingClientRect()
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    let para = document.getElementById("measure")
    para.innerHTML = ''
    for (const key in rect){
    if (typeof rect[key] !== 'function'){
        para.innerHTML += `${key} : ${rect[key]}<br>`
    }
}
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    let limite = document.getElementById("area2").getBoundingClientRect()
    let rect = elmnt.getBoundingClientRect()
    if (rect['bottom'] < limite['bottom'] && rect['top'] > limite['top'] && rect['right'] < limite['right'] && rect['left'] > limite['left']){
      let newItems = document.getElementById("area2")
      newItems.innerHTML += `<div id="4" class="drag">
      <!-- Include a header DIV with the same name as the draggable DIV, followed by "header" -->
      <div id="1header" class="thing">Click here to move</div>
      <p>Questão</p>
  </div>`
    }

    elmnt.style.top = originalTop + "px";
    elmnt.style.left = originalLeft + "px";

    document.onmouseup = null;
    document.onmousemove = null;

    for (let items in document.getElementsByClassName("drag")) {
      dragElement(document.getElementsByClassName("drag")[items]);
  }
  }
}