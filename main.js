let usuarios = {
    name:"Juana",
    phone: "32153623"
}


localStorage.setItem("datosUsuarios", JSON.stringify(usuarios))
let datosObtenidos = JSON.parse(localStorage.getItem("datosUsuarios"))
console.log("=> ", datosObtenidos)