/* Algoritmo con un condicional */

function mostrarPrecio(codigo) {
    switch (parseInt(codigo)) {
        case 1:
            console.log("🍔 El precio de la hamburguesa es $3500")
            break;

        case 2:
            console.log("🍟 El precio de las papas fritas es $2000")
            break;

        case 3:
            console.log("🍕 El precio de la pizza es $4000")
            break;

        case 4:
            console.log("🌭 El precio del pancho es $1500")
            break;

        case 5:
            console.log("🥪 El precio del sandwich es $2500")
            break;

        case 6:
            console.log("🌯 El precio del burrito es $3000")
            break;

        case 7:
            console.log("🌮 El precio de las fajitas es $4500")
            break;

        case 8:
            console.log("🥙 El precio de la ensalada es $5000")
            break;

        default:
            console.warn("😬 No comprendimos tu selección. Intentalo nuevamente.")
            break;
    }
}

function eleccionComida() {
    let codigo = prompt("Ingresá el código numérico de tu elección de comida");
    mostrarPrecio(codigo)
}



/* Algoritmo con un ciclo */

function mostrarCuotas() {
    console.log("📢  Aprovechá esta oportunidad!")
    for (let i = 1; i <= 3; i++) {
        console.log(i + " cuota(s) sin interés.")
    }
}

/* Simulador interactivo */
function eleccionComida() {
    let respuesta = confirm("Deseas conocer el precio de alguna comida?")
    if (respuesta === true) {
        let codigo = prompt("Ingresá el código numérico de tu elección");
        mostrarPrecio(codigo)
        mostrarCuotas()
        let respuestaComprar = confirm("Deseas comprar tu plato elegido?")
        if (respuestaComprar === true) {
            alert("Muchas gracias! 🙌 Que lo disfrutes!")
        } 
    } else {
        console.warn("Lamentamos que así sea! 😁 Vuelve pronto!")
    }
}