import React from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function DateBooked({ imageSource, name, date, hour }) {

    return (
        <View src={themeComponent.views.dateBookedContainer}>
            <Image
                source={{ uri: 'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp' }}
                style={themeComponent.images.mini}></Image>
        </View>

    )

}