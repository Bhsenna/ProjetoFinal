// Não falamos do Bruno
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

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    let limite = document.getElementById("area2").getBoundingClientRect()
    let rect = elmnt.getBoundingClientRect()
    const modelos = {
      'tipo1': `<div class="a">
      <label for="calculo">2+2 é igual a:</label>
      <select name="calculo" id="calculo">
        <option value="5">5</option>
        <option value="22">22</option>
        <option value="0">0</option>
        <option value="4">4</option>
      </select>
      <label for="calculo"> é o resultado</label>
    </div>`,
      'tipo2': `<div>undefined</div>`,
      'tipo3': `<div>undefined</div>`,
    }
    if (rect['bottom'] < limite['bottom'] && rect['top'] > limite['top'] && rect['right'] < limite['right'] && rect['left'] > limite['left']){
      let newItems = document.getElementById("area2")
      let newEl = elmnt.cloneNode(true)
      newEl.style.top =  ((newItems.childElementCount - 3) * 50) + 'px'
      newEl.style.left = '0'
      newEl.style.right = '0'
      newEl.style.margin = '0 auto'
      let tipo = 'tipo' + newEl.id.slice(-1)
      newEl.id = 'questao' + (newItems.childElementCount - 2)
      newEl.className = `questao ${tipo}`
      newEl.innerHTML = `<div>${modelos[`${tipo}`]}</div>` + `<input id="${newEl.id}_button_mais" style="position: absolute; right: 0; top: 0; height: 24px; width: 24px" type="button" value="+" onclick="mais('${tipo}', '${newEl.id}')">`
      newEl.innerHTML += `<input id="${newEl.id}_button_menos" style="position: absolute; right: 24px; top: 0; height: 24px; width: 24px" type="button" value="-" onclick="menos('${newEl.id}')">`

      newItems.appendChild(newEl)
    }

    elmnt.style.top = originalTop + "px";
    elmnt.style.left = originalLeft + "px";

    document.onmouseup = null;
    document.onmousemove = null;

    // for (let items in document.getElementsByClassName("questao")) {
    //   dragOrder(document.getElementsByClassName("questao")[items]);
    // }
  }
}





















































































































































































































































































// Bruno ↓
// function dragOrder(elmnt) {
//   var originalTop = elmnt.offsetTop
//   var originalLeft = elmnt.offsetLeft
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragOrderMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragOrderMouseDown;
//   }

//   function dragOrderMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragOrderElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDragOrder;
//   }

//   function elementDragOrder(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;

//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragOrderElement() {
//     // stop moving when mouse button is released:
//     let all = []
//     for (const object of document.getElementById('area2').children){
//       all.push(object)
//     }
    
//     let elemento = document.getElementById(`${elmnt.id}`)
//     let anterior = all[all.indexOf(elemento) - 1]
//     let posterior = all[all.indexOf(elemento) + 1]

//     if (anterior === undefined && posterior === undefined){
//     }else if (posterior === undefined){
//       console.log(originalTop + 75)
//       console.log(pos4)
//       if (pos4 < (originalTop + 75)){
//         elemento.after(anterior);
//       }
//     }else if (anterior === undefined){
//       if (pos4 > (originalTop + 75)){
//         posterior.after(elemento);
//       }
//     }else{
//       if (pos4 < (originalTop + 75)){
//         elemento.after(anterior);
//       }else if (pos4 > (originalTop + 75)){
//         posterior.after(elemento);
//       }
//     }

//     elmnt.style.left = originalLeft + "px";
//     changeOrder()
//     originalTop = elmnt.offsetTop
//     originalLeft = elmnt.offsetLeft
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// function changeOrder() {
//   let all = document.getElementsByClassName('questao')
//   for (let i = 0; i < all.length; i++){
//     all[i].style.top =  (i * 50) + 'px'
//   }
// }