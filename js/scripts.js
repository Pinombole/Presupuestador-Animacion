// Desafio 6, incorporando Arrays y Proyecto Final Parte 1
class PresetAnimacion {
    constructor(nombre, personajes = 0, secundarios = 0, fondos = 0, precio = 200, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.numPersonajes = personajes;
        this.numSecundarios = secundarios;
        this.numFondos = fondos;
        this.precioMinuto = precio;
    }
    get getNombrePreset() {
        return this.nombre;
    }
    set setNombrePreset(nuevo) {
        this.nombre = nuevo;
    }
    get getNumPersonajes() {
        return this.numPersonajes;
    }
    set setNumPersonajes(nuevo) {
        this.numPersonajes = nuevo;
    }
    get getNumSecundarios() {
        return this.numSecundarios;
    }
    set setNumSecundarios(nuevo) {
        this.numSecundarios = nuevo;
    }
    get getNumFondos() {
        return this.numFondos;
    }
    set setNumFondos(nuevo) {
        this.numFondos = nuevo;
    }
    get getPrecioMinuto() {
        return this.precioMinuto;
    }
    set setPrecioMinuto(nuevo) {
        this.precioMinuto = nuevo;
    }
}

// class Cliente {
//     constructor(nombre, mail, pais, tipoCliente, alcance) {
//         this.nombre = nombre;
//         this.mail = mail;
//         this.pais = pais;
//         this.tipoCliente = tipoCliente;
//         this.alcance = alcance;
//     }
//     get getPais() {
//         return this.pais;
//     }
//     set setPais(nuevo) {
//         this.pais = nuevo;
//     }
//     get getTipoCliente() {
//         return this.tipoCliente;
//     }
//     set seTipoCliente(nuevo) {
//         this.tipoCliente = nuevo;
//     }
//     get getAlcance() {
//         return this.alcance;
//     }
//     set setAlcance(nuevo) {
//         this.alcance = nuevo;
//     }
// };

const secondsToMinutes = (segundos) => segundos / 60;
const minutesToSeconds = (minutos) => minutos * 60;
const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => x / y;

function conversionDolarPeso(dolar, cotizacion) {
    let tarifaPesos = dolar * cotizacion;
    return tarifaPesos.toFixed(0);
};

function calcularIva(bruto) {
    let iva = bruto * 1.21;
    return iva.toFixed(0);
};

function duracionUsuario() {
    do {
        duracionMin = Number(prompt("Ingrese la Duracion en Minutos"));
        duracionSeg = Number(prompt("Ingrese la Duracion en Segundos"));
        validacion = !isNaN(duracionMin) && !isNaN(duracionSeg);
    } while (!validacion)
    const duracionTotal = secondsToMinutes(duracionSeg) + duracionMin;
    return duracionTotal;
};

function fracMinToMinSec(frac) {
    let seconds = frac * 60;
    return [Math.floor(seconds / 60), Math.floor(seconds % 60)];
};

function getFormatoHora() {
    const [mins, seg] = fracMinToMinSec(duracionIngresada);
    const formatoHora = `${mins} Minutos ${seg} Segundos`;
    return formatoHora;
};

function defineTipoTarifa(cliente) {
    let tarifaDecidida;
    const tarifaBase = cliente.toLowerCase() === "Particular".toLowerCase();
    const tarifaMedia = cliente.toLowerCase() === "Pyme".toLowerCase() || cliente.toLowerCase() === "Músico".toLowerCase();
    const tarifaAlta = cliente.toLowerCase() === "Empresa".toLowerCase() || cliente.toLowerCase() === "Productora".toLowerCase();

    if (tarifaBase) {
        tarifaDecidida = 1;
    } else if (tarifaMedia) {
        tarifaDecidida = 1.5;
    } else if (tarifaAlta) {
        tarifaDecidida = 2;
    } else {
        alert("Error. Ingrese Tipo")
    }
    return tarifaDecidida;
}

function listaNombresArrayDeObjetos(array) {
    const listado = [];
    for (let i = 0; i < array.length; i++) {
        listado.push(array[i].nombre);
    };
    return listado;
}

function buscaObjetoEnArray(array) {
    const findPreset = array.find(preset => preset.nombre.toLowerCase() === tipoProyectoIngresado.toLowerCase())
    return findPreset;
}

const ajustarTarifa = precioBase => multiplicar(precioBase, tarifaDecidida);

function precioTotalAssets(precioBase, cantidad) {
    const tarifaAjustada = ajustarTarifa(precioBase)
    const precioTotalAssets = multiplicar(tarifaAjustada, cantidad);
    return precioTotalAssets;
}

function cotizadorBruto() {
    const SumaFinal = totalPersonajes + totalSecundarios + totalFondos + totalMinAnimacion;
    return SumaFinal.toFixed(0);
}

let duracionIngresada;
const presets = [];

presets.push(new PresetAnimacion("Motion Graphics", 0, 0, 0, 100, duracionIngresada));
presets.push(new PresetAnimacion("Rigging de Personaje", 1, 0, 0, 0, duracionIngresada));
presets.push(new PresetAnimacion("Animación de Personaje", 1, 0, 0, 75, duracionIngresada));
presets.push(new PresetAnimacion("Escena Animada Individual", 1, 0, 1, 100, duracionIngresada));
presets.push(new PresetAnimacion("Video Explicativo Simple", 1, 0, 2, 100, duracionIngresada));
presets.push(new PresetAnimacion("Video Explicativo Complejo", 3, 2, 5, 150, duracionIngresada));
presets.push(new PresetAnimacion("Clip Musical (Cantante)", 1, 0, 4, 100, duracionIngresada));
presets.push(new PresetAnimacion("Clip Musical (Banda)", 5, 0, 1, 100, duracionIngresada));
presets.push(new PresetAnimacion("Clip Musical Complejo", 5, 2, 7, 150, duracionIngresada));
presets.push(new PresetAnimacion("Musicales Que Repiten Protagonistas", 2, 2, 5, 100, duracionIngresada));
presets.push(new PresetAnimacion("Capítulo de Serie Animada", 4, 4, 5, 100, duracionIngresada));
presets.push(new PresetAnimacion("Cortometraje", 2, 4, 7, 150, duracionIngresada));

console.log(presets)

// Datos Cliente. Los Comento para que no sean tan invasivos los Prompts, pero cada uno equivaldría a los campos de mi formulario 
const nombreIngresado = prompt("Ingresa tu nombre");
// const mailIngresado = prompt("Ingresa tu mail");
// const paisIngresado = prompt("Ingresa tu pais");
const tipoClienteIngresado = prompt("Elegí que tipo de cliente sos, escribiendo: Particular, Pyme, Empresa, Músico o Productora");
// const datosCliente = new Cliente(nombreIngresado, mailIngresado, paisIngresado, tipoClienteIngresado, alcanceIngresado);

const tarifaDecidida = defineTipoTarifa(tipoClienteIngresado);

const listadoPresetsAnimacion = listaNombresArrayDeObjetos(presets);

const tipoProyectoIngresado = prompt(`Elegí el Tipo de proyecto ingresando algunos de los siguientes: ${listadoPresetsAnimacion.join(", ")}`);
// const numPersonajesIngresado = Number(prompt("Ingresa la cantidad de personajes principales. Escribe ESC si quieres los valores por Defecto para"));
// const numSecundariosIngresado = Number(prompt("Ingresa la cantidad de personajes secundarios. Escribe ESC si quieres los valores por Defecto para ${nombreIngresado}"));
// const numFondosIngresado = Number(prompt("Ingresa la cantidad de Fondos Escribe ESC si quieres los valores por Defecto para ${nombreIngresado} "));
const presetElegido = buscaObjetoEnArray(presets);

duracionIngresada = duracionUsuario();
const duracionFormatoHora = getFormatoHora();

const totalMinAnimacion = multiplicar(ajustarTarifa(presetElegido.precioMinuto), duracionIngresada);

let cantidadPersonajes = presetElegido.numPersonajes;
let cantidadSecundarios = presetElegido.numSecundarios;
let cantidadFondos = presetElegido.numFondos;
const totalPersonajes = precioTotalAssets(50, cantidadPersonajes)
const totalSecundarios = precioTotalAssets(50, cantidadSecundarios);
const totalFondos = precioTotalAssets(50, cantidadFondos);

console.log(totalPersonajes);
console.log(totalSecundarios);
console.log(totalFondos);
console.log(totalMinAnimacion);

const brutoAnimDolar = cotizadorBruto();
const brutoAnimPesos = conversionDolarPeso(brutoAnimDolar, 94.93);
const precioMasIva = calcularIva(brutoAnimPesos);

document.querySelector(".presupuestoFinal h5").textContent = `¡Hola ${nombreIngresado}!`;
document.querySelector(".presupuestoFinal p").textContent = `Tu proyecto ${presetElegido.nombre} con ${presetElegido.numPersonajes} personajes, ${presetElegido.numSecundarios} personajes secundarios, ${presetElegido.numFondos} Fondos y una duración de ${duracionFormatoHora} cuesta ${brutoAnimDolar} dólares o ${brutoAnimPesos} pesos.`;
document.querySelector(".presupuestoFinal .iva").textContent = `El precio con IVA es ${precioMasIva} pesos`;
const divHidden = document.querySelector(".presupuestoFinal")
divHidden.classList.remove("hidden");

// Hasta acá el Desafio 7, modificando el DOM

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
};

//Menu Hamburguesa//
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
});
