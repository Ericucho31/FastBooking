function obtenerHoraActual(fecha) {
    
    // Obtener las horas, minutos y segundos actuales
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    // Asegurarse de que cada componente tenga dos dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Formatear la hora como 00:00:00
    var horaFormateada = horas + ':' + minutos + ':' + segundos;

    return horaFormateada;
}

function convertirFecha(fecha) {
    // Divide la fecha en partes separadas por '/'

    const partes = fecha.split('/');

    // Extrae el día, mes y año de las partes
    const dia = partes[0];
    const mes = partes[1];
    const año = partes[2];

    // Crea la nueva cadena en formato 'yyyy-mm-dd'
    const nuevaFecha = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

    return nuevaFecha;
}

export {convertirFecha, obtenerHoraActual}