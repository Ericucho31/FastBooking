import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function FirstTimeButton( { text}) {
    return (
        <Pressable style={themeComponent.buttons.firstTime}>
            <Text style={themeComponent.text.firstTime}>{text}</Text>
        </Pressable>
    );
}