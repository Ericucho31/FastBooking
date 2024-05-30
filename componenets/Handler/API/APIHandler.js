import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

async function GetAllAvailableDates({ status }) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/GetAllAppointments/${status}`)
        const citas = response.data;
        return citas;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function GetDateById({ id, status }) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/GetAppointmentsUser/${id}`)

        //filtra el arreglo según el valor de status
        return response.data.filter(date => date.status == status);

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function GetOnlyOneDateById({ id }) {
    try {
        const response = await axios.get(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/read/${id}`)

        return response.data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function DeleteDateById({ id }) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.delete(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/delete/${id}`)

        //filtra el arreglo según el valor de status
        return response.data

    } catch (error) {
        console.error('Error al borrar los datos:', error);
        throw error;
    }
}

async function GetUserInfoById({ id }) {
    //eric: 25
    try {
        const response = await axios.get(`https://a4b3-187-190-138-154.ngrok-free.app/api/User/read/${id}`)
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

async function GetUserInfoByToken({ token }) {
    try {
        const userData = jwtDecode(token)

        const userInfo = {
            id: userData.userId,
            fullName: userData.FullName,
            email: userData.email,
            phoneNumber: userData.PhoneNumber,
            address: userData.Address,
            profession: userData.Profession,
            imageUrl: userData.ImageUrl,
        }
        return userInfo;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function CreateNewUser({ user }) {
    //eric: 25
    try {
        const response = await axios.post('https://a4b3-187-190-138-154.ngrok-free.app/api/User/register', user)
        const status = response.status;
        return status;

    } catch (error) {
        console.error('Error al crear los datos:', error);
        throw error;
    }
}

async function LoginUser({ user }) {
    //eric: 25
    try {
        const response = await axios.post('https://a4b3-187-190-138-154.ngrok-free.app/api/User/login', user)
        //console.log(response.data.token)
        const token = response.data.token;
        return token;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
}

async function CreateNewDateAPI({ date }) {
    //eric: 25
    try {
        const response = await axios.post('https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/create', date)

        const responseDescription = response.data;
        return responseDescription;

    } catch (error) {
        console.error('Error al crear una nueva cita:', error);
        throw error;
    }
}

function GlobalContextToAPIJson({ data }) {
    const jsonAPI = {
        clientName: data.clientName,
        phoneNumber: "6461234567",
        startDate: data.startDate,
        startTime: data.startTime,
        durationMinutes: 60,
        userImage: data.userImage,
        serviceProviderId: data.id,
        status: 2,
        clientFBID: 0
    }
    return jsonAPI;
}

async function ConfirmRequestedDate({ data, id }) {

    const citaAceptada = data.find(objeto => objeto.id === id);

    console.log('el id de confirmacion es')
    console.log(id)

    if (citaAceptada) {
        citaAceptada.status = 2;
        delete citaAceptada.id;
        delete citaAceptada.creationDate;
        delete citaAceptada.description;
        delete citaAceptada.modificationDate;

        console.log('La cita aceptada es:')
        console.log(citaAceptada)

        try {
            const response = await axios.put(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/update/${id}`, citaAceptada)
            
            console.log('la respuesta de la confirmación es ')
            console.log(response)
            const responseDescription = response.data;
            return responseDescription;
    
        } catch (error) {
            console.error('Error al crear una actualizar cita:', error);
            throw error;
        }

    }
}

async function UpdatedDate({ data, id, hour, date}) {

    const citaModificada = GetOnlyOneDateById({id:id});

    if (citaModificada) {
        citaModificada.startDate = date;
        citaModificada.startTime = hour;
        delete citaModificada.id;
        delete citaModificada.creationDate;
        delete citaModificada.description;
        delete citaModificada.modificationDate;

        console.log('La cita reagendada es:')
        console.log(citaModificada)

        try {
            const response = await axios.put(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/update/${id}`, citaModificada)
            
            console.log('la respuesta de la confirmación es ')
            console.log(response)
            const responseDescription = response.data;
            return responseDescription;
    
        } catch (error) {
            console.error('Error al crear una actualizar cita:', error);
            throw error;
        }
    }
}



export { GetAllAvailableDates, GetDateById, GetOnlyOneDateById, DeleteDateById, ConfirmRequestedDate, GetUserInfoById, CreateNewUser, LoginUser, GetUserInfoByToken, CreateNewDateAPI, GlobalContextToAPIJson, UpdatedDate };