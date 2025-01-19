const contador1 = document.getElementById('contador_1')
const contador2 = document.getElementById('contador_2')
const contador3 = document.getElementById('contador_3')
let valor1 = 0
let valor2 = 0
let valor3 = 0

setInterval(()=>{
  if(valor1 < 1200){
    valor1++;
    contador1.innerText = valor1
  }

},1)



setInterval(()=>{
  if(valor2 < 4600){
    valor2++;
    contador2.innerText = valor2
  }

},1)


setInterval(()=>{
  if(valor3 < 3200){
    valor3++;
    contador3.innerText = valor3
  }

},1)

