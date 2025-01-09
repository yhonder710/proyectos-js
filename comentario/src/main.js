const boton = document.querySelector('.boton')
const mensaje = document.querySelector('.container-mensaje')


boton.addEventListener('click', () =>{
  boton.classList.toggle('boton-activo')
  mensaje.classList.toggle('mensaje-activo')
})
