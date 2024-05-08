import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from "@rneui/base";

export default function ConfirmationModal({name, color, onPress, onCancel }) {

    // Estilo dinámico para header3 con color personalizado
    const header3Style = {
        ...themeComponent.headers.header3,
        color: color, // Color dinámico
    };

      // Función de manejo personalizada para el botón "Denegar"
  const handleDenegar = () => {
    onPress(); // Llama a la función onPress
    onCancel(); // Llama a la función onCancel
  };

    return (
        <View style={themeComponent.card.confirmation} >
            <Text style={themeComponent.text.selectDate}>¿Estás seguro que quieres denegar la cita de {name}?</Text>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={handleDenegar}>
                    <Text style={themeComponent.text.cancelar}>Denegar</Text>
                </TouchableOpacity>

                <Divider orientation="vertical" width={1}></Divider>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={onCancel}>
                    <Text style={themeComponent.text.logOut} >Cancelar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}