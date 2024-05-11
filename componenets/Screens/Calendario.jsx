import React, { useState } from "react";
import { View } from "react-native";
import themeComponent from "../Theme/themeComponent";
import CalendarDate from "../Cards/CalendarDate";
import SetDateModal from "../Modals/SetDateModal";
import CreateNewDate from "../Modals/CreateNewDate";
import CitasJson from "../../ddinamico.json"

export default function Calendario() {
    const [jsonData, setJsonData] = useState([CitasJson]);

    // Función para manejar los dato confirmados del componente hijo
    const handleConfirmation = (data) => {
        console.log("Datos confirmados:", data);
        CitasJson.citas.push(data); //primero lo agregamos al JSON
        setJsonData(CitasJson); //y luego actualizamos el valor del useState
    };


    return (
        <View style={{ alignItems: 'center', backgroundColor: themeComponent.colors.grayBackground }}>

            <SetDateModal></SetDateModal>

            <View>
                {CitasJson.citas.map((item, index) => {
                    return (<CalendarDate
                        key={index}
                        imageSource={item.imageSource}
                        name={item.name}
                        hour={item.hour} />
                    )
                })}

            </View>
            <CreateNewDate onConfirmation={handleConfirmation} />
        </View>
    )
}
