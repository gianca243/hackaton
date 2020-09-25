let boton = document.getElementById("bton")
let name = document.getElementById("nickName")
let password = document.getElementById('password')
const form =document.getElementById('form')
let crud = []
form.addEventListener('submit',(e)=>{
  let newU = 0
  if( crud.length == 0 ){
    crud[0]=name.value+password.value
  } else {
    for(let i = 0 ; i<crud.length ; i++){
      if(crud[i]==(name.value+password.value)){
        newU = 1 
      }
    }
    if (newU == 0) {
      crud = crud.push(name.value+password.value)
    }
  }
  
  e.preventDefault()
  localStorage.setItem("crud", crud)
  console.log(localStorage.getItem('crud'));
  localStorage.setItem("nombre", name.value)
  localStorage.setItem("apellido", password.value)
  // window.location = "./assets/pages/juego.html"
})

