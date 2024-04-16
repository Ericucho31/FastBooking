import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PrimaryIconAndtextButton({ onPress, texto, icon }) {

    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: themeComponent.colors.primary }}
            style={themeComponent.buttons.selectDate}
        >
            <View style={{ marginRight: 5}}>
                <Ionicons name={icon} size={20} color={themeComponent.colors.primary} />
            </View>

            <Text style={themeComponent.text.selectDate}>{texto}</Text>

        </Pressable>
    );
}