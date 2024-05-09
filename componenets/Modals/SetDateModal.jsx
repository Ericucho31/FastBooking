import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button, Modal, } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import IconAndTextButton from "../Buttons/PrimaryIconAndtextButton";

export default function SetDateModal() {

    const [isVisible, setIsVisible] = useState(false);
    const [fecha, setFecha] = useState();

    return (
        <View>

            <IconAndTextButton onPress={()=> setIsVisible(true)} 
            texto={`${fecha ? fecha.dateString : new Date().toDateString()}`} 
            icon="calendar-outline"/>

            <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType='fade' transparent={true}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={{ width: '90%',borderRadius:30, padding: 15, backgroundColor: 'white' }}>
                        <Calendar
                            hideExtraDays={true}
                            pastScrollRange={0}
                            futureScrollRange={0}
                            firstDay={1}

                            onDayPress={(day) => { setFecha(day), setIsVisible(false), console.log(day) }}
                        />

                    </View>
                </View>
            </Modal>
        </View>

    )

}