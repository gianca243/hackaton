let boton = document.getElementById("bton")
let name = document.getElementById("nickName")
let password = document.getElementById('password')
const form =document.getElementById('form')
let crud = {}
const historial = JSON.parse(localStorage.getItem('crud'))
if (historial) {
  crud = historial
}

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if (name.value != '') {
    if (password.value != '') {
      if(!crud[name.value+" "+password.value]){
        crud[name.value+" "+password.value]={
          nombre:name.value,
          apellido:password.value,
          puntaje:0
        }    
      } else {
        swal({
          title: "Usuario ya existe!",
          text: "Crea otro usuario!",
          icon: "warning",
        });
      }
    }
  }
  localStorage.setItem("crud", JSON.stringify(crud))
  console.log(localStorage.getItem('crud'));
  localStorage.setItem("nombre", name.value)
  localStorage.setItem("apellido", password.value)
  window.location = "./assets/pages/juego.html"
})

