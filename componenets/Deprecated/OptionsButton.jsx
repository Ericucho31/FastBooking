import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import themeComponent from "../Theme/themeComponent";

export default function OptionsButton() {
    return (
        <View>
            <TouchableOpacity >
                <Ionicons name="chevron-down-outline" size={24} color={themeComponent.colors.primary}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}