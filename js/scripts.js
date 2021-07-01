// Desafio 6, incorporando Arrays y Proyecto Final Parte 1
class PresetAnimacion {
    constructor(nombre, personajes = 0, secundarios = 0, fondos = 0, precio = 200) {
        this.nombre = nombre;
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

class Cliente {
    constructor(nombre, mail, pais, tipoCliente) {
        this.nombre = nombre;
        this.mail = mail;
        this.pais = pais;
        this.tipoCliente = tipoCliente;
    }
    get getPais() {
        return this.pais;
    }
    set setPais(nuevo) {
        this.pais = nuevo;
    }
    get getTipoCliente() {
        return this.tipoCliente;
    }
    set seTipoCliente(nuevo) {
        this.tipoCliente = nuevo;
    }
};

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

function fracMinToMinSec(frac) {
    let seconds = frac * 60;
    return [Math.floor(seconds / 60), Math.floor(seconds % 60)];
};

function getFormatoHora(minutosDecimales) {
    const [mins, seg] = fracMinToMinSec(minutosDecimales);
    const formatoHora = `${mins} Minutos ${seg} Segundos`;
    return formatoHora;
};

function defineTarifaCliente(cliente) {
    let tarifaDecidida;
    const tarifaBase = cliente.toLowerCase() === "Particular".toLowerCase() || cliente.toLowerCase() === "Default".toLowerCase();
    const tarifaMedia = cliente.toLowerCase() === "Pyme".toLowerCase() || cliente.toLowerCase() === "Músicos".toLowerCase();
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

function defineTarifaTecnica(tecnica) {
    let tarifaDecidida;
    const tarifaBase = tecnica === "Cutout" || tecnica === "Default";
    const tarifaMedia = tecnica === "MasterController" || tecnica === "Mixta";
    const tarifaAlta = tecnica === "Tradicional";

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

function eligePreset() {
    //Elige Preset
    const buscado = selectProyecto.value;
    const presetEncontrado = buscaObjetoEnArray(presets, buscado);

    //Preset Elegido Define las opciones predeterminadas
    seteaPredeterminados(presetEncontrado);
    return presetEncontrado;
}

function seteaPredeterminados(preset) {
    const personajes = preset.getNumPersonajes;
    const secundarios = preset.getNumSecundarios;
    const fondos = preset.getNumFondos;

    if (preset.getNombrePreset === "Motion Graphics") {
        inputPersonajes.value = 0;
        inputSecundarios.value = 0;
        inputFondos.value = 0;
        inputPersonajes.parentElement.classList.add("hidden");
        inputSecundarios.parentElement.classList.add("hidden");
        inputFondos.parentElement.classList.add("hidden");
        selectTecnica.parentElement.classList.add("hidden");
        selectArte.parentElement.classList.add("hidden");
        checkboxSerie.checked = false;
        preguntasSerie.classList.add("hidden");
    }
    else if (preset.getNombrePreset === "Serie Narrativa" || preset.getNombrePreset === "Musical Serie") {
        checkboxSerie.checked = true;
        preguntasSerie.classList.remove("hidden");
        inputPersonajes.parentElement.classList.remove("hidden");
        inputSecundarios.parentElement.classList.remove("hidden");
        inputFondos.parentElement.classList.remove("hidden");
        selectTecnica.parentElement.classList.remove("hidden");
        selectArte.parentElement.classList.remove("hidden");
        inputPersonajes.value = personajes;
        inputSecundarios.value = secundarios;
        inputFondos.value = fondos;

    }
    else {
        inputPersonajes.parentElement.classList.remove("hidden");
        inputSecundarios.parentElement.classList.remove("hidden");
        inputFondos.parentElement.classList.remove("hidden");
        selectTecnica.parentElement.classList.remove("hidden");
        selectArte.parentElement.classList.remove("hidden");
        inputPersonajes.value = personajes;
        inputSecundarios.value = secundarios;
        inputFondos.value = fondos;
        checkboxSerie.checked = false;
        preguntasSerie.classList.add("hidden");
    }
    //El if no me queda grabado al tocar F5. ¿Habria que agregarlo al Local o al Session Storage?
    //Otra cosa que pasa es que se me bloquea la palanquita que habilita las preguntas. 
}

function checkPreguntasSerie() {
    if (checkboxSerie.checked = true) {
        preguntasSerie.classList.remove("hidden");
    }
    else {
        preguntasSerie.classList.add("hidden");
    }
}

function listaNombresArrayDeObjetos(array) {
    const listado = [];
    for (let i = 0; i < array.length; i++) {
        listado.push(array[i].nombre);
    };
    return listado;
}

function buscaObjetoEnArray(array, buscado) {
    const findPreset = array.find(preset => preset.nombre.toLowerCase() === buscado.toLowerCase())
    return findPreset;
}

function ajustarTarifa(precioBase, tarifa) {
    const ajuste = multiplicar(precioBase, tarifa);
    return ajuste;
}

//Para sacar Total Personajes, Total Secundarios, Total Fondos. Pero pensar si no conviene tener el precio indivudual por personaje, ajustado segun clente
function precioAssetsAjustado(precioBase) {
    const ajusteTecnica = ajustarTarifa(precioBase, tarifaTecnica);
    const precioAssetAjustado = ajustarTarifa(ajusteTecnica, tarifaCliente);
    return precioAssetAjustado;
}

function cotizadorBruto() {
    const sumaFinal = totalPersonajes + totalSecundarios + totalFondos + totalMinAnimacion;
    return sumaFinal.toFixed(0);
}

function publicaPresupuestoHTML() {
    let divHidden;
    divHidden = document.querySelector(".presupuestoFinal");
    if (paisIngresado === "Argentina" && tipoClienteIngresado !== "Particular") {
        document.querySelector(".presupuestoFinal h5").textContent = `¡Hola ${nombreIngresado}!`;
        document.querySelector(".presupuestoFinal p").textContent = `Tu proyecto ${presetElegido.nombre} con ${inputPersonajes.value} personajes, ${inputSecundarios.value} personajes secundarios, ${inputFondos.value} Fondos y una duración de ${duracionFormatoHora} cuesta ${brutoAnimPesos} pesos.`;
        document.querySelector(".presupuestoFinal .iva").textContent = `El precio con IVA es ${precioMasIva} pesos`;
        divHidden.classList.remove("hidden");

    }
    else if (paisIngresado === "Argentina" && tipoClienteIngresado === "Particular") {
        document.querySelector(".presupuestoFinal h5").textContent = `¡Hola ${nombreIngresado}!`;
        document.querySelector(".presupuestoFinal p").textContent = `Tu proyecto ${presetElegido.nombre} con ${inputPersonajes.value} personajes, ${inputSecundarios.value} personajes secundarios, ${inputFondos.value} Fondos y una duración de ${duracionFormatoHora} cuesta ${brutoAnimPesos} pesos.`;
        document.querySelector(".presupuestoFinal .iva").classList.add("hidden");
        divHidden.classList.remove("hidden");
    }
    else {
        document.querySelector(".presupuestoFinal h5").textContent = `¡Hola ${nombreIngresado}!`;
        document.querySelector(".presupuestoFinal p").textContent = `Tu proyecto ${presetElegido.nombre} con ${inputPersonajes.value} personajes, ${inputSecundarios.value} personajes secundarios, ${inputFondos.value} Fondos y una duración de ${duracionFormatoHora} cuesta ${brutoAnimDolar} dólares.`;
        document.querySelector(".presupuestoFinal .iva").classList.add("hidden");
        divHidden.classList.remove("hidden");

    }
}
let nombreIngresado;
let mailIngresado;
let datosCliente;
let paisIngresado;
let tipoClienteIngresados;
let tipoProyectoIngresado;
let presetElegido;
let cantidadPersonajes;
let cantidadSecundarios;
let cantidadFondos;
let precioPersonajeBase = 150;
let precioSecundarioBase = 100;
let precioFondoBase = 100;
let tarifaCliente;
let tarifaTecnica;
let cotizacionDolarHoy = 94.93;
let totalMinAnimacion;
let duracionFormatoHora;
let totalPersonajes;
let totalSecundarios;
let totalFondos;
let brutoAnimDolar;
let brutoAnimPesos;
let precioMasIva;
const presets = [];

presets.push(new PresetAnimacion("Default", 0, 0, 0, 200));
presets.push(new PresetAnimacion("Motion Graphics", 0, 0, 0, 250));
presets.push(new PresetAnimacion("Rigging", 1, 0, 0, 0));
presets.push(new PresetAnimacion("Animacion Personaje", 1, 0, 0, 150));
presets.push(new PresetAnimacion("Escena Animada", 1, 0, 1, 200));
presets.push(new PresetAnimacion("Explicativo Simple", 1, 0, 2, 200));
presets.push(new PresetAnimacion("Explicativo Complejo", 3, 2, 5, 300));
presets.push(new PresetAnimacion("Musical Cantante", 1, 0, 4, 200));
presets.push(new PresetAnimacion("Musical Banda", 5, 0, 1, 200));
presets.push(new PresetAnimacion("Musical Complejo", 5, 2, 7, 300));
presets.push(new PresetAnimacion("Musical Serie", 2, 2, 5, 200));
presets.push(new PresetAnimacion("Serie Narrativa", 4, 4, 5, 200));
presets.push(new PresetAnimacion("Cortometraje", 2, 4, 7, 300));

const presupuestoForm = document.querySelector('#presupuesto-form');
const inputNombre = document.querySelector('#inputNombre');
const inputMail = document.querySelector('#inputMail');
const inputPais = document.querySelector('#inputPais');
const inputPersonajes = document.querySelector('#inputPersonajes');
const inputSecundarios = document.querySelector('#inputSecundarios');
const inputFondos = document.querySelector('#inputFondos');
const inputMinutos = document.querySelector('#inputMin');
const inputSegundos = document.querySelector('#inputSeg');
const selectProyecto = document.querySelector('#selectProyecto');
const selectTipoCliente = document.querySelector('#selectTipoCliente');
const selectTecnica = document.querySelector('#selectTecnica');
const selectArte = document.querySelector('#selectArte');
const checkboxSerie = document.querySelector('#activaSerie');
const preguntasSerie = document.querySelector('.preguntasSerie');

//Event Listeners
presupuestoForm.addEventListener("submit", cotizaAnimacion);
selectProyecto.addEventListener("change", eligePreset);
checkboxSerie.addEventListener("change", checkPreguntasSerie);

function cotizaAnimacion(e) {
    e.preventDefault();

    nombreIngresado = inputNombre.value;
    mailIngresado = inputMail.value;
    paisIngresado = inputPais.value;
    tipoClienteIngresado = selectTipoCliente.value;

    datosCliente = new Cliente(nombreIngresado, mailIngresado, paisIngresado, tipoClienteIngresado);
    // Acá mandaría el dato de cliente al Storage ¿?

    presetElegido = buscaObjetoEnArray(presets, selectProyecto.value);
    console.log(presetElegido);

    //Usuario Modifica Cantidades
    cantidadPersonajes = inputPersonajes.value;
    cantidadSecundarios = inputSecundarios.value;
    cantidadFondos = inputFondos.value;

    const tecnicaIngresada = selectTecnica.value;
    const estiloArteIngresado = selectArte.value;

    const duracionMin = Number(inputMinutos.value);
    const duracionSeg = Number(inputSegundos.value);
    const duracionIngresada = secondsToMinutes(duracionSeg) + duracionMin;
    duracionFormatoHora = getFormatoHora(duracionIngresada);

    tarifaCliente = defineTarifaCliente(tipoClienteIngresado);
    console.log(tarifaCliente)
    tarifaTecnica = defineTarifaTecnica(tecnicaIngresada);
    console.log(tarifaTecnica)
    //Empezar a Cotizar recordando que ahora la tarifaDecidida se llama tarifaCliente  
    //Se van aplicar individualmente a PrecioMinuto de animacion sacado del presetElegido. Precio por Pesonajes y Fondos;
    const precioMinutoAnim = precioAssetsAjustado(presetElegido.precioMinuto);
    const precioCadaPersonaje = precioAssetsAjustado(precioPersonajeBase);
    const precioCadaSecundario = precioAssetsAjustado(precioSecundarioBase);
    const precioCadaFondo = precioAssetsAjustado(precioFondoBase);

    totalMinAnimacion = multiplicar(precioMinutoAnim, duracionIngresada);
    console.log(`Total Minuto: ${totalMinAnimacion}`);
    totalPersonajes = multiplicar(precioCadaPersonaje, cantidadPersonajes)
    console.log(`Total Personaje: ${totalPersonajes}`);
    totalSecundarios = multiplicar(precioCadaSecundario, cantidadSecundarios);
    console.log(`Total Secundario: ${totalSecundarios}`);
    totalFondos = multiplicar(precioCadaFondo, cantidadFondos);
    console.log(`Total Fondo: ${totalFondos}`);

    brutoAnimDolar = cotizadorBruto();
    brutoAnimPesos = conversionDolarPeso(brutoAnimDolar, cotizacionDolarHoy);
    precioMasIva = calcularIva(brutoAnimPesos);
    console.log(`Total Dolar: ${brutoAnimDolar}`);

    publicaPresupuestoHTML();
}




// Hasta acá el Desafio 8, Eventos

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
