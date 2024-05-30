import React, { useState } from "react";
import { View, Button, Modal, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import BigIconButton from "../Buttons/BigIconButton";
import TextInputSimple from "../TextBox/TextInputSimple";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryIconAndtextButton from "../Buttons/PrimaryIconAndtextButton";
import { useDataContext } from "../Context/GlobalStateContext";
import { CreateNewDateAPI, GlobalContextToAPIJson } from "../Handler/API/APIHandler";
import { convertirFecha, obtenerHoraActual } from "../Handler/FormatoFechas";

export default function CreateNewDate() {
    const { state, dispatch } = useDataContext();

    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [isResultVisible, setIsResultVisble] = useState(false);

    const [dateSelected, setDateSelected] = useState();
    const [hourSelected, setHourSelected] = useState(null);
    const [clientsName, setClientsName] = useState(null);
    const [inputError, setInputError] = useState();

    // Función de devolución de llamada para manejar el cambio de texto
    const handleName = (text) => {
        setClientsName(text);
    };

    const onCancel = () => {

    }

    // Función para manejar la confirmación del botón
    const handleConfirmation = () => {
        if(clientsName == '' ) {
            setInputError('Debes agregar un nombre')
            return;

        }

        const data = {
            id: state.userData.id,
            clientName: clientsName,
            startDate: convertirFecha(dateSelected.toLocaleDateString()),
            startTime: hourSelected,
            userImage: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
        };

        // Llama a la función de devolución de llamada del componente padre
        dispatch({ type: 'CREATE_NEW_DATE', payload: data });

        const jsonAPI = GlobalContextToAPIJson({data:data});
        console.log(jsonAPI)

        try {
            const response = CreateNewDateAPI({date:jsonAPI});
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
                onCancel={ () => setIsVisibleCalendar(false)}
            />
            <DateTimePickerModal
                isVisible={isVisibleForm}
                mode="time"
                onConfirm={(time) => {
                    // Formatear la hora seleccionada a HH:mm
                    const formattedHour = obtenerHoraActual(time)
                    setHourSelected(formattedHour);
                    setIsVisibleForm(false); // Cambiado de true a false
                    setIsResultVisble(true);
                }}
                onCancel={() => setIsVisibleForm(false)}
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

                        {inputError && <Text style={themeComponent.text.cancelar}>{inputError}</Text>}


                        <TextInputSimple onTextChange={handleName} encabezado={'Nombre'} />

                        <Button title="Confirmar" onPress={handleConfirmation} />

                    </View>

                </View>

            </Modal>

        </View>

    )
}