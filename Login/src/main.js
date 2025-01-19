const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const circulo = document.querySelector('.color')
const presentacion = document.querySelector('.presentacion-1')
const crear = document.querySelector('.crear-usuario')

button1.addEventListener('click', () => {
  circulo.classList.add('mover')
  presentacion.classList.add('presentacion-mover')
  crear.classList.add('crear-usuario-mover')
})

button2.addEventListener('click', () => {
  circulo.classList.remove('mover')
  presentacion.classList.remove('presentacion-mover')
  crear.classList.remove('crear-usuario-mover')
})
