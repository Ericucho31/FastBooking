function convertirFecha(fecha) {
    // Dividir la fecha en año, mes y día
    var partesFecha = fecha.split("-");
    var año = partesFecha[0];
    var mes = partesFecha[1];
    var dia = partesFecha[2];

    // Array de nombres de meses en español
    var meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // Convertir el mes a su nombre en español
    var mesEnPalabras = meses[parseInt(mes) - 1];

    // Construir la fecha en formato español
    var fechaEnEspañol = dia + " de " + mesEnPalabras + " del " + año;

    return fechaEnEspañol;
}

export default convertirFecha;