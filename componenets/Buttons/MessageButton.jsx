import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import themeComponent from "../Theme/themeComponent";

export default function MessageButton() {
    return (
        <View  >
            <TouchableOpacity style={{backgroundColor:'white', padding:10, borderRadius:50}}>
                <Ionicons name="chatbubble-ellipses-outline" size={32} color={themeComponent.colors.primary} />
            </TouchableOpacity>
        </View>
    )
}