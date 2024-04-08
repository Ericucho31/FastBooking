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
                <DateBooked></DateBooked>
                    
            </View>
        </ScrollView>
    )
}
