import React, { useState } from "react";
import { View, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import themeComponent from "../Theme/themeComponent";
import { Button } from "@rneui/base";

export default function RescheduleModal({SimpleModalToggle, onDateSelected}) {

    const [dateSelected, setDateSelected] = useState(new Date());
    const [dateModal, SetDateModal] = useState(true);
    const [textVisibility, setTextVisibility] = useState('none');

    const handleDatePicked = (selectedDate) => {
        setDateSelected(selectedDate);
        SetDateModal(false);
        setTextVisibility('flex');
    }

    const handleAccept = () => {
        onDateSelected(dateSelected);
        SimpleModalToggle();
    }

    return (
        <View>
            <DateTimePicker
                isVisible={dateModal}
                minimumDate={new Date()}
                minuteInterval={30}
                mode="datetime"
                onConfirm={(date) => handleDatePicked(date)}
            />
            <View style={{display:textVisibility}}>
                <Text style={themeComponent.text.selectDate}>
                    Estás seguro que quieres reagendar la cita al {dateSelected.toString()}
                </Text>

                <Button title={'Aceptar'} onPress={handleAccept}/>

            </View>
        </View>
    )

}