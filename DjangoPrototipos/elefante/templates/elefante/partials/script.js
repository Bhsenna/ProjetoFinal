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
    let limite = document.getElementById("criacao").getBoundingClientRect()
    let rect = elmnt.getBoundingClientRect()
    if (rect['bottom'] < limite['bottom'] && rect['top'] > limite['top'] && rect['right'] < limite['right'] && rect['left'] > limite['left']){
      let newItems = document.getElementById("criacao")
      let newEl = elmnt.cloneNode(true)
      newEl.style.top =  ((newItems.childElementCount - 3) * 50) + 'px'
      newEl.style.left = '0'
      newEl.style.right = '0'
      newEl.style.margin = '0 auto'
      newEl.style.marginBottom = '15px'
      let tipo = 'tipo' + newEl.id.slice(-1)
      newEl.id = (newItems.childElementCount - 2)
      newEl.className = `questao ${tipo}`
      newEl.innerHTML = `<div style="display: flex; flex-wrap: wrap;"><textarea id="enunciado" style="width: calc(100% - 48px); resize: none; height:48px;"></textarea>` + `<div style="width: 48px;"><input id="${newEl.id}_button_mais" style="margin-left: auto; height: 24px; width: 24px" type="button" value="+" onclick="mais(this.parentElement.parentElement.parentElement.className.split(' ')[1], '${newEl.id}')">` + `<input id="${newEl.id}_button_menos" style="height: 24px; width: 24px" type="button" value="-" onclick="menos(this.parentElement.parentElement.parentElement.className.split(' ')[1], '${newEl.id}')"><select id="trocador" style="height: 24px; width: 48px"></select></div></div><ol class="lista" type="a" id="${newEl.id}list">`

      newItems.prepend(newEl)
      let troca = document.getElementById('trocador')
      let modelos = document.getElementsByClassName('modelo')
      for (let i=0; i < modelos.length; i++){
        if (`tipo${i+1}` == tipo){
          troca.innerHTML += `<option value="tipo${i+1}" selected onclick="changeType(this.parentElement.parentElement.parentElement.parentElement, this.value)">tipo${i+1}</option>`
        }else{
          troca.innerHTML += `<option value="tipo${i+1}" onclick="changeType(this.parentElement.parentElement.parentElement.parentElement, this.value)">tipo${i+1}</option>`
        }
      }

      let novo = document.getElementById(newEl.id)
      document.getElementsByName("csrfmiddlewaretoken")[0].before(novo)
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