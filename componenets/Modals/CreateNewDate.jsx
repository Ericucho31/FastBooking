import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button, Modal, } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import BigIconButton from "../Buttons/BigIconButton";
import TextInputSimple from "../TextBox/TextInputSimple";

export default function CreateNewDate() {

    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [fecha, setFecha] = useState(Date);

    return (
        <View>
            <BigIconButton
                icon="add-outline"
                iconColor="white"
                bgColor={themeComponent.colors.primary}
                onPress={()=> setIsVisibleCalendar(true)} 
            />

            <Modal visible={isVisibleCalendar} onRequestClose={() => setIsVisibleCalendar(false)} animationType='fade' transparent={true}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={{ width: '90%', padding: 15, backgroundColo: 'white' }}>
                        <Calendar
                            hideExtraDays={true}
                            pastScrollRange={0}
                            futureScrollRange={0}
                            firstDay={1}

                            onDayPress={(day) => { setFecha(day), setIsVisibleCalendar(false), setIsVisibleForm(true),console.log(day) }}
                        />

                    </View>
                </View>
            </Modal>


            <Modal visible={isVisibleForm} animationType='fade' transparent={true}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={{ width: '90%', padding: 15, backgroundColo: 'white' }}>
                        <TextInputSimple encabezado={'Horario'} nombre={'Escriba el horario de la cita'}></TextInputSimple>
                        <Text>Holaaaa</Text>
                    </View>
                </View>
            </Modal>

        </View>

    )

}