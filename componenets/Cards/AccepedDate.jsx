import React, { useEffect, useState } from "react";
import { View, Text, Animated, TouchableOpacity, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";
import * as Progress from 'react-native-progress';

export default function AcceptedDate({ name, onPress }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer;
        if (progress < 1) {
            timer = setTimeout(() => setProgress(progress + 0.035), 50);
        }
        return () => clearTimeout(timer);
    }, [progress]);


    return (
        <Animated.View style={themeComponent.card.newDateRequest.aceptarCita}>
            <Progress.Bar progress={progress} width={300}
                    color="rgba(255, 255, 255, 1)"

                    borderColor="rgba(255, 255, 255, 1)"/>
            <Text style={themeComponent.text.loginFacebook}>La cita de {name} ha sido confirmada</Text>

            <Pressable onPress={onPress}>
                <View style={{padding:4, borderRadius: 50, backgroundColor:'white'}}>
                    <Text style={themeComponent.text.cancelar}>Cancelar acción</Text>
                </View>
                

            </Pressable>
        </Animated.View>
    )
}