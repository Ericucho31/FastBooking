import React, { useState } from "react";
import { StyleSheet,View,Image, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function HourTag({text}) {
    return (
        <View style={themeComponent.buttons.timehour}>
            <Image style={{marginRight:5}} source={require('../../assets/clock.png')}></Image>
            <Text style={themeComponent.text.timehour}>{text}</Text>
        </View>
    );
}