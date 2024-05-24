import React, { useState } from "react";
import { Text, View, } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function NoCitasPendientes() {

    return (
        <View style={{alignItems:'center'}}>
            <Text style={themeComponent.headers.header3}>No hay citas pendientes</Text>
        </View>

    )
}
