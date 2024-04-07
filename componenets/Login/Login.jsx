import React, {useState} from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import TextInputExample from "../TextBox/TextInputLogin";

export default function Login () {
    
    return(
        <ScrollView style= {themeComponent.background.backgroundView}>
            <Text style= {themeComponent.headers.header1}> Pantalla del Login</Text>
            <Image 
            style={themeComponent.images.thumbnail}
            source={require('../../assets/logo.jpg')}></Image>
            
            <TextInputExample></TextInputExample>
        </ScrollView>
    )
}
