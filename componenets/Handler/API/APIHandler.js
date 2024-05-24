import axios from 'axios';

async function GetAllAvailableDates({ status }) {
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

async function GetDateById({ id }) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/GetAppointmentsUser/${id}`)
        return response.data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function GetUserInfoById({ id }) {
    //eric: 25
    try {
        const response = await axios.get(`https://24a5-187-188-39-222.ngrok-free.app/api/User/read/${id}`)
        const userData = response.data;

        const userInfo = {
            id: userData.id,
            fullName: userData.fullName,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            address: userData.address,
            profession: userData.profession,
            imageUrl: userData.imageUrl,
        }
        return userInfo;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

export { GetAllAvailableDates, GetDateById, GetUserInfoById };