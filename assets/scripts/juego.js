const nombre = localStorage.getItem('nombre')
const apellido = localStorage.getItem('apellido')
let nombreLabel = document.getElementById('nameU')
if(nombre != null){
  nombreLabel.innerText=nombre+" "+apellido
}
let puntos = document.getElementById('puntos')
let labelZ = document.getElementById('usuario1')
const usuarioZuly = document.getElementById("zuly")
let labelJ = document.getElementById('usuario2')
const usuarioJenn= document.getElementById("jenn")
let labelJo = document.getElementById('usuario3')
const usuarioJona = document.getElementById("jona")
let labelG = document.getElementById('usuario4')
const usuarioGian = document.getElementById("gian")
/////
let puntuacion = 0
let centZ = 0
usuarioZuly.addEventListener("click",()=>{
  if(centZ == 0){
    const nombreUsuario = prompt('Ingresar nombre')
    if(nombreUsuario == 'Zuly Parra'){
      puntuacion = puntuacion + 2
      centZ=1
      labelZ.innerText = 'Zuly Parra'
      exito(centZ,centJ,centJo,centG)
    } else {
      puntuacion = puntuacion -1
      swal("Te equivocaste!", "vuelve a intentarlo!", "error");
    }
    puntos.innerText=puntuacion
    puntosG(puntuacion)
  }
})
//////
let centJ = 0
usuarioJenn.addEventListener("click",()=>{
  if(centJ == 0){
    const nombreUsuario = prompt('Ingresar nombre')
    if(nombreUsuario == 'Jennifer Montenegro'){
      puntuacion = puntuacion + 2
      centJ=1
      labelJ.innerText = 'Jennifer Montenegro'
      exito(centZ,centJ,centJo,centG)
    } else {
      puntuacion = puntuacion -1
      swal("Te equivocaste!", "vuelve a intentarlo!", "error");
    }
    puntos.innerText=puntuacion
    puntosG(puntuacion)
  }
})
//////
let centJo = 0
usuarioJona.addEventListener("click",()=>{
  if(centJo == 0){
    const nombreUsuario = prompt('Ingresar nombre')
    if(nombreUsuario == 'Jonathan Sanchez'){
      puntuacion = puntuacion + 2
      centJo=1
      labelJo.innerText = 'Jonathan Sánchez'
      exito(centZ,centJ,centJo,centG)
    } else {
      puntuacion = puntuacion -1
      swal("Te equivocaste!", "vuelve a intentarlo!", "error");
    }
    puntos.innerText=puntuacion
    puntosG(puntuacion)
  }
})
//////
let centG = 0
usuarioGian.addEventListener("click",()=>{
  if(centG == 0){
    const nombreUsuario = prompt('Ingresar nombre')
    if(nombreUsuario == 'Giancarlo Zapata'){
      puntuacion = puntuacion + 2
      centG=1
      labelG.innerText = 'Giancarlo Zapata'
      exito(centZ,centJ,centJo,centG)
    } else {
      puntuacion = puntuacion -1
      swal("Te equivocaste!", "vuelve a intentarlo!", "error");
    }
    puntos.innerText=puntuacion
    puntosG(puntuacion)
  }
})

function exito(a,b,c,d){
  if((a+b+c+d)==4){
    swal("Good job!", "has completado la prueba!", "success");    
    puntosG(puntuacion)
  }
}

function puntosG(p){
  usuarios = JSON.parse(localStorage.getItem('crud'))
  // localStorage.setItem("puntos",p)
}
