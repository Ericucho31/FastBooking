import React, { useState } from "react";
import { View, Button } from "react-native";
import BigIconButton from "../Buttons/BigIconButton";
import themeComponent from "../Theme/themeComponent";
import SimpleModal from "../Modals/SimpleModal";
import NotififcationCard from "../Cards/NotificationCard";
import AcceptedDate from "../Cards/AccepedDate";

export default function PruebaScreen() {
    const [jsonData, setJsonData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    // Función para cambiar la visibilidad del modal
    const toggleModalVisibility = () => {
        setIsVisible(!isVisible);
    };


    // Función para manejar los datos confirmados del componente hijo
    const handleConfirmation = (data) => {
        console.log("Datos confirmados:", data);
        // Agregar el nuevo JSON al arreglo existente
        setJsonData([...jsonData, data]);
    };

    return (
        <View style={{ alignItems: 'center' }}>

            <BigIconButton icon={'balloon-outline'} iconColor={'white'} bgColor={themeComponent.colors.green} onPress={toggleModalVisibility} />
            <SimpleModal isVisible={isVisible} toggleModalVisibility={toggleModalVisibility}
                Component={<NotififcationCard
                    icon={'calendar-outline'}
                    color={themeComponent.colors.primary}
                    header={'Citas pendientes de aceptación'}
                    description={'Cuenta con 6 citas pendientes de ser respondidas, ingrese a la pestaña de Citas para marcarlas'} 
                    />} 
            />
            <AcceptedDate></AcceptedDate>
        </View>
    );
}
