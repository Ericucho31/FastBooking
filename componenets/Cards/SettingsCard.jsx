import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from "@rneui/base";

export default function SettingsCard({ icon, iconColor, cardName, textColor, onPress}) {

    return (
        <TouchableOpacity style={themeComponent.card.settings} onPress={onPress}>
            <View style={{ marginRight: 5 }}>
                <Ionicons name={icon} size={24} color={iconColor} />
            </View>

            <View>
                <Text style={textColor ? textColor : themeComponent.headers.header3}>{cardName}</Text>

            </View>

            <View style={{ position: 'absolute', right: 10 }}>
                <Ionicons name={'chevron-forward-outline'} size={24} color={iconColor} />
            </View>
        </TouchableOpacity>

    );
}