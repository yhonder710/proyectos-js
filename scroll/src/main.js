//primero se llama la funcion despues se asignan los segundos y despues se agrega la animacion q queramos
gsap.to("#bg", {
  scrollTrigger:{
    scrub:1
  },
  scale:1.5
})

gsap.to("#man", {
  scrollTrigger:{
    scrub:1
  },
  scale:0.5
})

gsap.to("#clouds_1", {
  scrollTrigger:{
    scrub:1
  },
  x:200
})

gsap.to("#clouds_2", {
  scrollTrigger:{
    scrub:1
  },
  x:-200
})

gsap.to("#text", {
  scrollTrigger:{
    scrub:3
  },
  y:500
})

//loading page

setTimeout(function(){
document.getElementById('loanding').className += " loaded"
},3500)
