class Animacion {
    constructor(tipo, duracion, tarifa) {
        this.tipoAnimacion = tipo;
        this.duracion = duracion;
        this.tipoTarifa = tarifa;
    }

    cotizarTiempoAnimacion() {
        let precioMinutoAnimacion;

        if (this.tipoTarifa == "baja") {
            precioMinutoAnimacion = 150;
        } else if (this.tipoTarifa == "media") {
            precioMinutoAnimacion = 300;
        } else if (this.tipoTarifa == "alta") {
            precioMinutoAnimacion = 600;
        } else {
            alert("Error Cotización")
        }

        const precioMinutoPesos = conversionDolarPeso(precioMinutoAnimacion, 94.93);
        const brutoAnimDolar = precioMinutoAnimacion * this.duracion;
        const brutoAnimPesos = conversionDolarPeso(brutoAnimDolar, 94.93);
        const precioMasIva = calcularIva(brutoAnimPesos);

        console.log(`El costo del minuto de animacion de un ${this.tipoAnimacion} es de ${precioMinutoAnimacion} dólares o ${precioMinutoPesos} pesos. El precio total de la animación es ${brutoAnimDolar} dolares o ${brutoAnimPesos} pesos. El precio con IVA es ${precioMasIva} pesos`);
    }
}

class Cliente {
    constructor(nombre, mail, pais, tipoCliente, alcance) {
        this.nombre = nombre;
        this.mail = mail;
        this.mail = pais;
        this.mail = tipoCliente;
        this.alcance = alcance;
    }
}

const secondsToMinutes = (segundos) => segundos / 60;
const minutesToSeconds = (minutos) => minutos * 60;
const multiplicar = (x, y) => x * y;

function conversionDolarPeso(dolar, cotizacion) {
    let tarifaPesos = dolar * cotizacion;
    return tarifaPesos.toFixed(0);
}

function calcularIva(bruto) {
    let iva = bruto * 1.21;
    return iva.toFixed(0);
}

do {
    duracionMin = Number(prompt("Ingrese la Duracion en Minutos"));
    duracionSeg = Number(prompt("Ingrese la Duracion en Segundos"));
    validacion = !isNaN(duracionMin) && !isNaN(duracionSeg);
} while (!validacion)

const duracionIngresada = secondsToMinutes(duracionSeg) + duracionMin;

const motionGraphics = new Animacion("Motion Graphics", duracionIngresada, "baja");
const explicativoSimple = new Animacion("Video Explicativo Simple", duracionIngresada, "baja");
const musicalSimple = new Animacion("Video Musical Simple", duracionIngresada, "media");
const narrativoSimple = new Animacion("Video Narrativo Simple", duracionIngresada, "media");
const explicativoComplejo = new Animacion("Video Explicativo Complejo", duracionIngresada, "alta");
const musicalComplejo = new Animacion("Video Musical Complejo", duracionIngresada, "alta");
const narrativoComplejo = new Animacion("Video Narrativo Complejo", duracionIngresada, "alta");



motionGraphics.cotizarTiempoAnimacion();
explicativoSimple.cotizarTiempoAnimacion();
musicalSimple.cotizarTiempoAnimacion();
narrativoSimple.cotizarTiempoAnimacion();
explicativoComplejo.cotizarTiempoAnimacion();
musicalComplejo.cotizarTiempoAnimacion();
narrativoComplejo.cotizarTiempoAnimacion();
// //Hasta acá el Desafio 5, incorporando Objects a mi Simulador




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
