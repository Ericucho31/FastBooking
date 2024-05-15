const agregarCita = (citasAgendadas, nuevaCita) => {
    // Verificar si existe una cita con la misma fecha
    if (citasAgendadas.hasOwnProperty(nuevaCita.date)) {
        // Si existe una cita con la misma fecha, agregar la nueva cita al arreglo existente
        citasAgendadas[nuevaCita.date].push({
            name: nuevaCita.name,
            data: {
                id: nuevaCita.id,
                name: nuevaCita.name,
                hour: nuevaCita.hour,
                date: nuevaCita.date,
                imageSource: nuevaCita.imageSource
            }
        });
    } else {
        // Si no existe una cita con la misma fecha, crear un nuevo arreglo para esa fecha y agregar la nueva cita
        citasAgendadas[nuevaCita.date] = [{
            name: nuevaCita.name,
            data: {
                id: nuevaCita.id,
                name: nuevaCita.name,
                hour: nuevaCita.hour,
                date: nuevaCita.date,
                imageSource: nuevaCita.imageSource
            }
        }];
    }

    return citasAgendadas;
};

export default agregarCita;
