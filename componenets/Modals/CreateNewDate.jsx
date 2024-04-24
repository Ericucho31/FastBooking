import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button, Modal, TouchableOpacity} from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import BigIconButton from "../Buttons/BigIconButton";
import TextInputSimple from "../TextBox/TextInputSimple";

export default function CreateNewDate() {

    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
    const [isVisibleForm, setIsVisibleForm] = useState(false);


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

                            onDayPress={(day) => { setIsVisibleCalendar(false), setIsVisibleForm(true),console.log(day) }}
                        />

                    </View>
                </View>
            </Modal>


            <Modal visible={isVisibleForm} animationType='fade' transparent={true}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={{ padding: 15, backgroundColor: 'white' , borderRadius:30}}>
                        <TextInputSimple encabezado={'Horario'} nombre={'12:00'}/>
                        <TextInputSimple encabezado={'Nombre del paciente'} nombre={'Juan Perez'}/>

                        <Button title="Aceptar" 
                        color={themeComponent.colors.primary} 
                        onPress={() => setIsVisibleForm(false)}/>
                    </View>
                </View>
            </Modal>

        </View>

    )

}