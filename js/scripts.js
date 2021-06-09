
let tipoAnimacion;
let duracionMin;
let duracionSeg;
let precioSegAnimacion;
let tipoCliente;
let alcance;
let estiloArte;

do {
    tipoAnimacion = prompt("Elija el Tipo de Animación escribiendo Motion Graphics', 'Explicativo Simple', 'Explicativo Complejo', 'Musical Simple', 'Musical Complejo' o 'Narrativo Simple' o 'Narrativo Complejo").toLowerCase();
    duracionMin = Number(prompt("Ingrese la Duracion en Minutos"));
    duracionSeg = Number(prompt("Ingrese la Duracion en Segundos"));
    validacion = !isNaN(duracionMin) && !isNaN(duracionSeg);
} while (!validacion)

const tarifaBaja = tipoAnimacion === "motion graphics" || tipoAnimacion === "explicativo simple";
const tarifaMedia = tipoAnimacion === "musical simple" || tipoAnimacion === "narrativo simple";
const tarifaAlta = tipoAnimacion === "explicativo complejo" || tipoAnimacion === "musical complejo" || tipoAnimacion === "narrativo complejo";

console.log(tarifaBaja);
console.log(tarifaMedia);
console.log(tarifaAlta);

//No sé si esto conviene que sea una funcion o queda acá suelto. 
//Es para definir que tipo de tarifa segun lo que elija el Usuario
if (tarifaBaja) {
    precioSegAnimacion = 2.5;
} else if (tarifaMedia) {
    precioSegAnimacion = 5;
} else if (tarifaAlta) {
    precioSegAnimacion = 10;
} else {
    alert("Error Cotización. Ingrese Tipo de Animacion Correctamente")
}
// console.log(precioSegAnimacion);

const minutesToSeconds = (minutos) => minutos * 60;
const multiplicar = (x, y) => x * y;

function conversionDolarPeso(dolar, cotizacion) {
    let tarifaPesos = dolar * cotizacion;
    return tarifaPesos.toFixed(2);
}

function calcularIva(bruto) {
    let iva = bruto * 1.21;
    return iva.toFixed(2);
}

const precioMinutoAnimacion = multiplicar(precioSegAnimacion, 60);
const precioMinutoPesos = conversionDolarPeso(precioMinutoAnimacion, 94.93);

const duracionAnimacion = minutesToSeconds(duracionMin) + duracionSeg;
// console.log(duracionAnimacion);

const brutoAnimDolar = precioSegAnimacion * duracionAnimacion;
const brutoAnimPesos = conversionDolarPeso(brutoAnimDolar, 94.93);

const precioMasIva = calcularIva(brutoAnimPesos);

console.log(`El precio del Minuto de Animación es ${precioMinutoAnimacion} dolares o ${precioMinutoPesos} pesos. El precio total de la animación es ${brutoAnimDolar} dolares o ${brutoAnimPesos} pesos. El precio con IVA es ${precioMasIva} pesos`);
alert(`El precio del Minuto de Animación es ${precioMinutoAnimacion} dolares o ${precioMinutoPesos} pesos. El precio total de la animación es ${brutoAnimDolar} dolares o ${brutoAnimPesos} pesos. El precio con IVA es ${precioMasIva} pesos`);
//Hasta acá el Desafio 4 y Entrega del Simulador Interactivo



// Scripts que ya tenia en mi html 
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 200,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();

//Boton Active//
function myClick($name) {
    var element = document.getElementById($name);
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        element.classList.add("active");
    }
}

//Menu Hamburguesa//
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
});
