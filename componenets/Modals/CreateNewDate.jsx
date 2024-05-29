import React, { useState } from "react";
import { View, Button, Modal, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import BigIconButton from "../Buttons/BigIconButton";
import TextInputSimple from "../TextBox/TextInputSimple";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryIconAndtextButton from "../Buttons/PrimaryIconAndtextButton";
import { useDataContext } from "../Context/GlobalStateContext";
import { CreateNewDateAPI, GlobalContextToAPIJson } from "../Handler/API/APIHandler";


export default function CreateNewDate() {
    const { state, dispatch } = useDataContext();

    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [isResultVisible, setIsResultVisble] = useState(false);

    const [dateSelected, setDateSelected] = useState();
    const [hourSelected, setHourSelected] = useState(null);
    const [clientsName, setClientsName] = useState(null);

    function convertirFecha(fecha) {
        // Divide la fecha en partes separadas por '/'
        const partes = fecha.split('/');

        // Extrae el día, mes y año de las partes
        const dia = partes[0];
        const mes = partes[1];
        const año = partes[2];

        // Crea la nueva cadena en formato 'yyyy-mm-dd'
        const nuevaFecha = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

        return nuevaFecha;
    }

    // Función de devolución de llamada para manejar el cambio de texto
    const handleName = (text) => {
        setClientsName(text);
    };

    // Función para manejar la confirmación del botón
    const handleConfirmation = () => {
        const data = {
            id: state.id,
            clientName: clientsName,
            startDate: convertirFecha(dateSelected.toLocaleDateString()),
            startTime: hourSelected,
            userImage: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
        };
        console.log(JSON.stringify(data, null, 2));

        // Llama a la función de devolución de llamada del componente padre
        dispatch({ type: 'CREATE_NEW_DATE', payload: data });

        const jsonAPI = GlobalContextToAPIJson(data);

        try {
            const response = CreateNewDateAPI(jsonAPI);
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        //cierra la ventana modal
        setIsResultVisble(false);
    };

    return (
        <View>
            <View>
                <BigIconButton
                    icon="add-outline"
                    iconColor="white"
                    bgColor={themeComponent.colors.primary}
                    onPress={() => setIsVisibleCalendar(true)}
                />
            </View>


            <DateTimePickerModal
                isVisible={isVisibleCalendar}
                mode="date"
                onConfirm={(date) => {
                    setDateSelected(date),
                        setIsVisibleCalendar(false),
                        setIsVisibleForm(true),
                        console.log(dateSelected)
                }}
            />
            <DateTimePickerModal
                isVisible={isVisibleForm}
                mode="time"
                onConfirm={(time) => {
                    // Formatear la hora seleccionada a HH:mm
                    const formattedHour = time.getHours() + ":" + time.getMinutes() + ":" +time.getSeconds();
                    setHourSelected(formattedHour);
                    setIsVisibleForm(false); // Cambiado de true a false
                    setIsResultVisble(true);
                    
                }}
            />

            <Modal visible={isResultVisible} animationType='fade' transparent={true}>
                <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    
                    <View style={{ width:'90%', alignItems: 'center',backgroundColor: 'white', borderRadius:30}}>
                        <View style={{ flexDirection: 'row' }}>
                            <PrimaryIconAndtextButton onPress={() => { setIsVisibleCalendar(true) }}
                                texto={dateSelected ? dateSelected.toLocaleDateString() : ''}
                                icon={'calendar-outline'} />

                            <PrimaryIconAndtextButton onPress={() => { setIsVisibleForm(true) }}
                                texto={hourSelected}
                                icon={'time-outline'} />
                        </View>


                        <TextInputSimple onTextChange={handleName} encabezado={'Nombre'} />

                        <Button title="Confirmar" onPress={handleConfirmation} />

                    </View>

                </View>

            </Modal>

        </View>

    )
}