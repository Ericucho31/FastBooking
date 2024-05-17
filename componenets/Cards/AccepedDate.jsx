import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function AcceptedDate({ name, onPress }) {

    return (
        <Animated.View style={themeComponent.card.newDateRequest.aceptarCita}>
            <Text style={themeComponent.text.loginFacebook}>La cita de {name} ha sido confirmada</Text>
            <Pressable onPress={onPress}>
                <View>
                    <Text>Cancelar acción</Text>

                </View>

            </Pressable>
        </Animated.View>
    )
}