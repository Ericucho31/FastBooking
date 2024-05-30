import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import themeComponent from "../Theme/themeComponent";
import { Button } from "@rneui/base";

export default function RescheduleModal({SimpleModalToggle, onDateSelected, confirmDate, confirmHour}) {

    const [dateSelected, setDateSelected] = useState();
    const [dateModal, SetDateModal] = useState(true);
    const [textVisibility, setTextVisibility] = useState('none');

    const handleDatePicked = () => {
        
        SetDateModal(false);
        setTextVisibility('flex');
    }

    const handleAccept = () => {
        onDateSelected(dateSelected)
        SimpleModalToggle();
    }

    return (
        <View>
            <DateTimePicker
                isVisible={dateModal}
                minimumDate={new Date()}
                mode="datetime"
                onConfirm={(datetime) => {setDateSelected(datetime), handleDatePicked(datetime)}}
            />
            <View style={{display:textVisibility}}>
                <Text style={themeComponent.text.selectDate}>
                    ¿Quieres guardar los cambios realizados?
                </Text>

                <Button title={'Aceptar'} onPress={handleAccept}/>

            </View>
        </View>
    )

}