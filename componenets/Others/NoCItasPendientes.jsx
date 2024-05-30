import React, { useState } from "react";
import { Image, ScrollView, Text, View, } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function NoCitasPendientes() {

    return (
        <ScrollView >
            <Text style={themeComponent.headers.header3}>No hay citas pendientes</Text>
            <Image style={themeComponent.images.emptySpace} source={{uri: 'https://static.vecteezy.com/system/resources/previews/013/821/926/non_2x/minimal-flip-calendar-3d-rendering-icon-on-transparent-background-png.png'}}/>
        </ScrollView>

    )
}
