const prendas1 = [
    {
        id: 1,
        nombre: "Remera White",
        precio: 20,
    },
    {
        id: 2,
        nombre: "Remera Black",
        precio: 20,
    },
    {
        id: 3,
        nombre: "Remera Orange",
        precio: 20,
    }
]
const prendas2 = [
    {
        id: 1,
        nombre: "Pantalón White",
        precio: 20,
    },
    {
        id: 2,
        nombre: "Pantalón Black",
        precio: 20,
    },
    {
        id: 3,
        nombre: "Pantalón Orange",
        precio: 20,
    }
]
const prendas3 = [
    {
        id: 1,
        nombre: "Campera White",
        precio: 20,
    },
    {
        id: 2,
        nombre: "Campera Black",
        precio: 20,
    },
    {
        id: 3,
        nombre: "Campera Orange",
        precio: 20,
    }
]
function aviso(){
    alert("Los resultados de su búsqueda se mostrarán por consola")
}
function todasLasPrendas(){
    const todas = [
        "Remera White",
        "Remera Black",
        "Remera Orange",
        "Pantalón White",
        "Pantalón Black",
        "Pantalón Orange",
        "Campera White",
        "Campera Black",
        "Campera Orange",
    ];
alert("Estas son todas las prendas disponibles, en total son " + ": " + todas.length)
for(let i = 0; i < todas.length; i++){
    alert((i + 1) + " " + todas[i])
}
}
let menu;
do{
    menu = parseInt(prompt("Seleccione la categoría que desee ver: \n 1.Remeras \n 2.Pantalones \n 3.Camperas \n 4.Todos los productos \n 0.Salir"))
switch(menu){
    case 0:
        alert("Gracias por elegirnos")
        break;
    case 1:
        const remeras = prendas1.filter((el) => el.nombre)
        console.log(remeras)
        aviso()
        break;
    case 2:
        const pantalones = prendas2.filter((el) => el.nombre)
        console.log(pantalones)
        aviso()
        break;
    case 3:
        const camperas = prendas3.filter((el) => el.nombre)
        console.log(camperas)
        aviso()
        break;
    case 4:
        todasLasPrendas()
        break
    default:
        alert("El número no es válido")
}
}while(menu !== 0)

