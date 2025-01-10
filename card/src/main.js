const card1 = document.querySelector('.uno')
const card2 = document.querySelector('.dos')
const card3 = document.querySelector('.tres')

const imagen = document.querySelector('.imagen')

card1.addEventListener('mouseover', ()=> {
  imagen.src = 'public/2.png'
})

card2.addEventListener('mouseover', ()=> {
  imagen.src = 'public/3.png'
})

card3.addEventListener('mouseover', ()=> {
  imagen.src = 'public/4.webp'
})
