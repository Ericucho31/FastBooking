import React, { useState } from "react";
import { Text, View, } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function NoCitasPendientes() {

    return (
        <View>
            <Text style={themeComponent.headers.header3}>No hay citas pendientes</Text>
        </View>

    )
}
