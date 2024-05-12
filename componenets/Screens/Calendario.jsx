import React, { useState } from "react";
import { Button, ScrollView, View } from "react-native";
import themeComponent from "../Theme/themeComponent";
import CalendarDate from "../Cards/CalendarDate";
import SetDateModal from "../Modals/SetDateModal";
import CreateNewDate from "../Modals/CreateNewDate";
import CitasJson from "../../dinamico.json"

import { useDataContext } from '../Context/GlobalStateContext';
import CalendarDate2 from "../Cards/CalendarDate2";

export default function Calendario() {
    const [jsonData, setJsonData] = useState([CitasJson]);
    const { state, dispatch } = useDataContext();

    // Función para manejar los dato confirmados del componente hijo
    const handleConfirmation = (data) => {
        console.log("Datos confirmados:", data);
        dispatch({ type: 'ADD_DATE', payload: data })
        CitasJson.citas.push(data); //primero lo agregamos al JSON
        setJsonData(CitasJson); //y luego actualizamos el valor del useState
    };

    console.log(state);

    return (
        <View style={{ alignItems: 'center', backgroundColor: themeComponent.colors.grayBackground }}>
            <SetDateModal></SetDateModal>
            <ScrollView>
                {state.citasAgendadas.map((item, index) => {
                    return (<CalendarDate2
                        key={index}
                        id={item.id}
                        imageSource={item.imageSource}
                        name={item.name}
                        hour={item.hour} />
                    )
                })}

            </ScrollView>
            <CreateNewDate onConfirmation={handleConfirmation} />
        </View>

    )
}
