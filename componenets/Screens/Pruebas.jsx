import React, { useState } from "react";
import { View, Button } from "react-native";
import GetDayDates from "../Handler/GetDayDates";
import CreateNewDate from "../Modals/CreateNewDate";
import NewDateRequest from "../Cards/NewDateRequest";
import Accordion from "../Buttons/EjemploAccordeon";

export default function PruebaScreen() {
    const [jsonData, setJsonData] = useState([]);

    // Función para manejar los datos confirmados del componente hijo
    const handleConfirmation = (data) => {
        console.log("Datos confirmados:", data);
        // Agregar el nuevo JSON al arreglo existente
        setJsonData([...jsonData, data]);
    };

    return (
        <View style={{ alignItems: 'center' }}>

            <GetDayDates jsonData={jsonData} />
            <NewDateRequest imageSource={'https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp'}
                name={'Jessica Hurtado Sánchez'}
                hour={'14:00'}
                date={'Abril 30'}></NewDateRequest>
            <CreateNewDate onConfirmation={handleConfirmation} />
        </View>
    );
}
