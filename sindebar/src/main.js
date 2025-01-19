const menu = document.querySelectorAll('.menu')
const sindebar = document.querySelector('.sindebar')

sindebar.addEventListener('mouseover', ()=>{
  sindebar.classList.add('show-sindebar')


})

sindebar.addEventListener('mouseout', ()=>{
  sindebar.classList.remove('show-sindebar')
})

menu.forEach((menus)=>{
  menus.addEventListener('click', ()=>{
    menus.classList.toggle('arrow')
    menus.classList.toggle('color')

    let height  = 0
    let menu = menus.nextElementSibling

    if(menu.clientHeight == 0){
      height = menu.scrollHeight
    }
    menu.style.height = `${height}px`
  })
})

