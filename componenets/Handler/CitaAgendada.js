const agregarCita = (citasAgendadas, nuevaCita) => {
    // Verificar si existe una cita con la misma fecha
    if (citasAgendadas.hasOwnProperty(nuevaCita.startDate)) {
        // Si existe una cita con la misma fecha, agregar la nueva cita al arreglo existente
        citasAgendadas[nuevaCita.startDate].push({
            name: nuevaCita.clientName,
            data: {
                id: nuevaCita.id,
                name: nuevaCita.clientName,
                hour: nuevaCita.startTime,
                date: nuevaCita.startDate,
                imageSource: nuevaCita.userImage
            }
        });
    } else {
        // Si no existe una cita con la misma fecha, crear un nuevo arreglo para esa fecha y agregar la nueva cita
        citasAgendadas[nuevaCita.startDate] = [{
            name: nuevaCita.clientName,
            data: {
                id: nuevaCita.id,
                name: nuevaCita.clientName,
                hour: nuevaCita.startTime,
                date: nuevaCita.startDate,
                imageSource: nuevaCita.userImage
            }
        }];
    }

    return citasAgendadas;
};

export default agregarCita;
