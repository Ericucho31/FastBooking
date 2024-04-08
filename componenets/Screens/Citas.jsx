import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import TextInputSimple from "../TextBox/TextInputSimple";
import LoginButton from "../Buttons/LoginButton";
import TextInputPassword from "../TextBox/TextInputPassword";
import DateBooked from "../Cards/DateBooked";

export default function Home() {

    return (
        <ScrollView>
            <View style={themeComponent.background.backgroundView}>
                <DateBooked imageSource={'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp'} 
                name={'Juan Rodriguez Torres de la Cruz'}
                hour={'12:00'}
                date={'Abril 26'}/>
            </View>
        </ScrollView>
    )
}
