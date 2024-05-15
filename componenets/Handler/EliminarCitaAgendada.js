const eliminarCitaPorIdYFecha = (citasAgendadas, fecha, id) => {
    // Verificar si la fecha existe en citasAgendadas
    if (citasAgendadas.hasOwnProperty(fecha)) {
        // Obtener el arreglo de citas para esta fecha
        const citas = citasAgendadas[fecha];
        
        // Buscar el índice del elemento con el ID dado en el arreglo de citas
        const index = citas.findIndex(cita => cita.data.id === id);
        
        // Si se encontró el elemento, eliminarlo del arreglo
        if (index !== -1) {
            citas.splice(index, 1);
            
            // Si el arreglo de citas está vacío después de eliminar el elemento, eliminar la fecha del objeto citasAgendadas
            if (citas.length === 0) {
                delete citasAgendadas[fecha];
            }
        }
    }
    else {
        console.log(fecha);
        console.log(id);
    }
    
    return citasAgendadas;
};

export default eliminarCitaPorIdYFecha;