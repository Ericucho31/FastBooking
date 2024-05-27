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

async function GetDateById({ id }) {
    // 0 = rechazado, 1 = solicitados, 2= aceptado
    try {
        const response = await axios.get(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/GetAppointmentsUser/${id}`)
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
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

export { GetAllAvailableDates, GetDateById, GetUserInfoById, CreateNewUser, LoginUser, GetUserInfoByToken};