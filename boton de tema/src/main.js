const boton = document.querySelector('.boton')
const container = document.querySelector('.boton-container')


boton.addEventListener('click', () =>{
  container.classList.toggle('activado')
  document.body.classList.toggle('modo-oscuro')

})
