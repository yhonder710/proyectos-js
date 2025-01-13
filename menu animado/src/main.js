const menu = document.querySelector('.menu')
const abrir = document.querySelector('.abrir')
const cerrar = document.querySelector('.cerrar')
const busqueda = document.querySelector('.busqueda')
const img = document.getElementById('img')
const home = document.getElementById('home')
const about = document.getElementById('about')
const services = document.getElementById('services')
const portfolio = document.getElementById('portfolio')
const team = document.getElementById('team')
const contact = document.getElementById('contact')

/**menu desplegable */
abrir.addEventListener('click', () => {
  abrir.classList.add('abrir-none')
  cerrar.classList.add('cerrar-block')
  menu.classList.add('flex')

  cerrar.addEventListener('click', () => {
    abrir.classList.remove('abrir-none')
    cerrar.classList.remove('cerrar-block')
    menu.classList.remove('flex')
  })

})

/**Propiedad de botones */

home.addEventListener('mouseover', () => {
  busqueda.classList.add('home')
  img.src = 'public/itachi-uchiha-naruto_3000x1666_xtrafondos.com.svg'

  home.addEventListener('mouseout', () => {
    busqueda.classList.remove('home')
  })
})


about.addEventListener('mouseover', () => {
  busqueda.classList.add('about')
  img.src = 'public/casa-kame-de-dragon-ball_3840x2160_xtrafondos.com.svg'

  about.addEventListener('mouseout', () => {
    busqueda.classList.remove('about')
  })
})

services.addEventListener('mouseover', () => {
  busqueda.classList.add('services')
  img.src = 'public/goku-ultra-instinct-transformacion-dragon-ball-super_5760x3240_xtrafondos.com.svg'

  services.addEventListener('mouseout', () => {
    busqueda.classList.remove('services')
  })
})


portfolio.addEventListener('mouseover', () => {
  busqueda.classList.add('portfolio')
  img.src = 'public/sasuke-sharingan-rinnegan_3840x2160_xtrafondos.com.svg'

  portfolio.addEventListener('mouseout', () => {
    busqueda.classList.remove('portfolio')
  })
})


team.addEventListener('mouseover', () => {
  busqueda.classList.add('team')
  img.src = 'public/tanjiro-kamado-de-guardianes-de-la-noche_3840x2160_xtrafondos.com.svg'

  team.addEventListener('mouseout', () => {
    busqueda.classList.remove('team')
  })
})


contact.addEventListener('mouseover', () => {
  busqueda.classList.add('contact')
  img.src = 'public/naruto-uzumaki-ilustracion_7680x4320_xtrafondos.com.svg'

  contact.addEventListener('mouseout', () => {
    busqueda.classList.remove('contact')
  })
})

