const items = document.querySelectorAll('.plantilla')
const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')

let countItem = items.length
let itemActive = 0;

boton1.onclick = function(){
  itemActive = itemActive + 1
  if(itemActive >= countItem){
    itemActive = 0
  }
  showSlider()
}

boton2.onclick = function(){
  itemActive = itemActive - 1
  if(itemActive < 0){
    itemActive = countItem - 1
  }
  showSlider()
}

function showSlider() {
  let itemRemover = document.querySelector('.plantilla.active')
  itemRemover.classList.remove('active')
/**Add active */
  items[itemActive].classList.add('active')
}
