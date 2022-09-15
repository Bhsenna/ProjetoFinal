function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}


// Make the DIV element draggable:
for (let items in document.getElementsByClassName("modelo")) {
    dragElement(document.getElementsByClassName("modelo")[items]);
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
      let newEl = elmnt.cloneNode(true)
      newEl.style.top =  (newItems.childElementCount * 50) + 'px'
      newEl.style.left = 0
      newEl.id = 'questao' + (newItems.childElementCount + 1)
      newEl.className = 'questao'
      newItems.appendChild(newEl)
    }

    elmnt.style.top = originalTop + "px";
    elmnt.style.left = originalLeft + "px";

    document.onmouseup = null;
    document.onmousemove = null;

    for (let items in document.getElementsByClassName("questao")) {
      dragOrder(document.getElementsByClassName("questao")[items]);
    }
  }
}

function dragOrder(elmnt) {
  const originalTop = elmnt.offsetTop
  const originalLeft = elmnt.offsetLeft
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragOrderMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragOrderMouseDown;
  }

  function dragOrderMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragOrderElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDragOrder;
  }

  function elementDragOrder(e) {
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

  function closeDragOrderElement() {
    // stop moving when mouse button is released:
    if (pos3 > originalTop){
      let elemento = document.getElementById(`${elmnt.id}`)
      let anterior = document.getElementById('questao1')
      elemento.after(anterior);
    }

    // elmnt.style.top = originalTop + "px";
    // elmnt.style.left = originalLeft + "px";

    document.onmouseup = null;
    document.onmousemove = null;
  }
}