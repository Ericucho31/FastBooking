import axios from 'axios';

const axiosData = async ({nombre}) => {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        return response.data;

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;

    }
}

export default axiosData;