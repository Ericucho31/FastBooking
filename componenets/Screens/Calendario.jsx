import React, { useState } from "react";
import { Button, View } from "react-native";
import themeComponent from "../Theme/themeComponent";
import CalendarDate from "../Cards/CalendarDate";
import SetDateModal from "../Modals/SetDateModal";
import CreateNewDate from "../Modals/CreateNewDate";
import CitasJson from "../../dinamico.json"

import { useDataContext } from '../Context/GlobalStateContext';

export default function Calendario() {
    const [jsonData, setJsonData] = useState([CitasJson]);
    const { state, dispatch } = useDataContext();

    // Función para manejar los dato confirmados del componente hijo
    const handleConfirmation = (data) => {
        console.log("Datos confirmados:", data);
        dispatch({type: 'ADD_DATE', payload: data})
        CitasJson.citas.push(data); //primero lo agregamos al JSON
        setJsonData(CitasJson); //y luego actualizamos el valor del useState
    };

    console.log(state);

    return (
        <View style={{ alignItems: 'center', backgroundColor: themeComponent.colors.grayBackground }}>

            <SetDateModal></SetDateModal>

            <View>
                {state.citasAgendadas.map((item, index) => {
                    return (<CalendarDate
                        key={index}
                        imageSource={item.imageSource}
                        name={item.name}
                        hour={item.hour} />
                    )
                })}

            </View>

            <CreateNewDate onConfirmation={handleConfirmation} />
            <Button title="Console log" onPress={console.log(state)}></Button>
        </View>
    )
}
