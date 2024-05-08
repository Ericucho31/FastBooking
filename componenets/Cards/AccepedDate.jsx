import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function AcceptedDate({ name, onPress }) {

    const [expandido, setExpandido] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

    return (
        <Animated.View style={themeComponent.card.newDateRequest.aceptarCita}>
            <Text style={themeComponent.text.loginFacebook}>La cita de {name} ha sido confirmada</Text>
        </Animated.View>
    )
}