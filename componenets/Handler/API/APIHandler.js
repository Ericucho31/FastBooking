import axios from 'axios';

async function GetAllAvailableDates({status}) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/GetAllAppointments/${status}`)
        const citas = response.data;
        return citas;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function GetDateById({id}) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/GetAppointmentsUser/${id}`)
        return response.data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

export {GetAllAvailableDates, GetDateById};