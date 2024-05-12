import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import NewDateRequest from "../Cards/NewDateRequest";
import CitasJson from "../../dinamico.json"
import DisplayNewDateRequests from "../Handler/DisplayNewDateRequest";

export default function Citas() {

    return (
        <View style={themeComponent.background.backgroundView}>

            <DisplayNewDateRequests />
        </View>

    )
}
