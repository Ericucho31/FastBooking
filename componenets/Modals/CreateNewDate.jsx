import React, { useState } from "react";
import { View, Button, Modal, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import BigIconButton from "../Buttons/BigIconButton";
import TextInputSimple from "../TextBox/TextInputSimple";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryIconAndtextButton from "../Buttons/PrimaryIconAndtextButton";


export default function CreateNewDate({onConfirmation}) {

    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [isResultVisible, setIsResultVisble] = useState(false);

    const [dateSelected, setDateSelected] = useState(null);
    const [hourSelected, setHourSelected] = useState(null);
    const [clientsName, setClientsName] = useState(null);


    // Función de devolución de llamada para manejar el cambio de texto
    const handleName = (text) => {
        setClientsName(text);
        console.log("Texto ingresado:", text);
    };

     // Función para manejar la confirmación del botón
     const handleConfirmation = () => {
        const data = {
            name: clientsName,
            //date: dateSelected,
            hour: hourSelected,
            imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP-lSza80x010-8Qiymbco975wl0qdIsa5O5PrAOdAQ&s",
        };
        
        // Llama a la función de devolución de llamada del componente padre
        onConfirmation(data);
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
                        setIsVisibleForm(true)
                }}
            />
            <DateTimePickerModal
                isVisible={isVisibleForm}
                mode="time"
                onConfirm={(time) => {
                    // Formatear la hora seleccionada a HH:mm
                    const formattedHour = time.getHours() + ":" + time.getMinutes();
                    setHourSelected(formattedHour);
                    setIsVisibleForm(false); // Cambiado de true a false
                    setIsResultVisble(true);
                }}
            />

            <Modal visible={isResultVisible} animationType='fade' transparent={true}>
                <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>

                    <View style={{flexDirection:'row'}}>
                        <PrimaryIconAndtextButton onPress={() => { setIsVisibleCalendar(true) }}
                            texto={dateSelected ? dateSelected.toLocaleDateString() : ''}
                            icon={'calendar-outline'} />

                        <PrimaryIconAndtextButton onPress={() => { setIsVisibleForm(true) }}
                            texto={hourSelected}
                            icon={'time-outline'} />
                    </View>


                    <TextInputSimple onTextChange={handleName} encabezado={'Nombre'} />

                    <Button title="Confirmar" onPress={ handleConfirmation} />

                </View>

            </Modal>

        </View>

    )
}