import { useDataContext } from "../../Context/GlobalStateContext";
import { con } from './utils'; // Asume que tienes una función para convertir la fecha

export function createNewJSONDate({ name, date, hour }) {
  const { state, dispatch } = useDataContext();

  const data = {
    id: state.id,
    name: name,
    date: convertirFecha(date.toLocaleDateString()),
    hour: hour,
    imageSource: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  };
  console.log(JSON.stringify(data, null, 2));

  dispatch({ type: 'CREATE_NEW_DATE', payload: data });
}
