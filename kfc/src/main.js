const btnAbrir = document.querySelector('.abrir')
const btnCerrar = document.querySelector('.cerrar')
const menuResponsive = document.querySelector('.menu-responsive')


btnAbrir.addEventListener('click', () =>{
  menuResponsive.classList.toggle('menu-activado')
  btnCerrar.classList.add('cerrar-activado')
  document.body.classList.add('no-scroll')
  btnAbrir.classList.add('abrir-responsive')

  btnCerrar.addEventListener('click', () => {
    menuResponsive.classList.remove('menu-activado')
    btnCerrar.classList.remove('cerrar-activado')
    document.body.classList.remove('no-scroll')
    btnAbrir.classList.remove('abrir-responsive')
  })
})
