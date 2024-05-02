import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import themeComponent from "../Theme/themeComponent";

export default function BigIconButton({icon, iconColor, bgColor, onPress}) {
    return (
        <View  >
            <TouchableOpacity 
                style={{backgroundColor:bgColor, padding:10, borderRadius:50}}
                onPress={onPress}>
                <Ionicons name={icon} size={28} color={iconColor} />
            </TouchableOpacity>
        </View>
    )
}