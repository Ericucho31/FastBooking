import React, { useState } from "react";
import { StyleSheet,View,Image, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function DateTag({text}) {
    return (
        <View style={themeComponent.buttons.timehour}>
            <Image style={{marginRight:5}} source={require('../../assets/calendar.png')}></Image>
            <Text style={themeComponent.text.timehour}>{text}</Text>
        </View>
    );
}