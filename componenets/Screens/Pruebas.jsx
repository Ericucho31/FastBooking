import React, { useState } from "react";
import { View, Button } from "react-native";
import GetDayDates from "../Handler/GetDayDates";
import CreateNewDate from "../Modals/CreateNewDate";

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
            <CreateNewDate onConfirmation={handleConfirmation} />
        </View>
    );
}
