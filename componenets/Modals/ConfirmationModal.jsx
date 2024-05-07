import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from "@rneui/base";

export default function ConfirmationModal({color, onPress }) {

    const [expandido, setExpandido] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

    // Estilo dinámico para header3 con color personalizado
    const header3Style = {
        ...themeComponent.headers.header3,
        color: color, // Color dinámico
    };

    return (
        <View style={themeComponent.card.confirmation} >
            <Text style={themeComponent.text.selectDate}>¿Estás seguro que quieres denegar la petición?</Text>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={themeComponent.text.cancelar}>Denegar</Text>
                </TouchableOpacity>

                <Divider orientation="vertical" width={1}></Divider>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={themeComponent.text.logOut}>Cancelar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}