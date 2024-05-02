import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import themeComponent from "../Theme/themeComponent";
import NotififcationCard from "../Cards/NotificationCard";
import { useNavigation } from '@react-navigation/native';

export default function NotififcationsScreen({ }) {
    const navigation = useNavigation();

    const GoToCitas = () => {

        navigation.navigate('Citas')
    }

    const GoToCalendario = () => {

        navigation.navigate('Calendario')
    }

    return (
        <View style={{ alignItems: 'center', backgroundColor: 'white' }}>

            <NotififcationCard
                icon={'calendar-outline'}
                color={themeComponent.colors.primary}
                header={'Citas pendientes de aceptación'}
                description={'Cuenta con 6 citas pendientes de ser respondidas, ingrese a la pestaña de Citas para marcarlas'} 
                onPress={GoToCitas}/>

            <NotififcationCard
                icon={'close-circle-outline'}
                color={themeComponent.colors.dangerRed}
                header={'Cancelación'}
                description={'Pedro Torres ha cancelado su cita para el 15 de Junio a las 16:00'} 
                onPress={GoToCalendario}/>

            <NotififcationCard
                icon={'time-outline'}
                color={themeComponent.colors.green}
                header={'Reagenda aceptada'}
                description={'Maria Zaragoza ha aceptado su propuesta de reagenda para el 11 de Mayo a las 14:00'} 
                onPress={GoToCalendario}/>

        </View>
    );
}
