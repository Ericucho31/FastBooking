import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import LoginComponent from "../Others/LoginComponent";

export default function PaymentFailed({ navigation }) {

    return (
        <View>
            <View style={themeComponent.background.backgroundView}>
                <Image
                    style={themeComponent.images.thumbnail}
                    source={{uri:'https://i1.sndcdn.com/artworks-GnPeZ0Osu7GkzSDC-dpQxfQ-t500x500.jpg'}} />

            </View>
        </View>
    )
}