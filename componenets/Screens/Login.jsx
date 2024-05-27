import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import LoginComponent from "../Others/LoginComponent";

export default function Login({ navigation }) {

    return (
        <View>
            <View style={themeComponent.background.backgroundView}>
                <Image
                    style={themeComponent.images.thumbnail}
                    source={require('../../assets/logo.jpg')} />

                <LoginComponent navigation={navigation}/>

            </View>
        </View>
    )
}
