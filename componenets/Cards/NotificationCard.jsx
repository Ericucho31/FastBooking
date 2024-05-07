import React, { useState } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import BigIconButton from "../Buttons/BigIconButton";

export default function NotififcationCard({ icon, color, header, description, onPress}) {

    const [expandido, setExpandido] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

     // Estilo dinámico para header3 con color personalizado
     const header3Style = {
        ...themeComponent.headers.header3,
        color: color, // Color dinámico
    };

    return (
        <TouchableOpacity style={themeComponent.card.notification.mainContainer} onPress={onPress}>
            <View style={{marginRight:10}}>
                <BigIconButton icon={icon}
                    iconColor={themeComponent.colors.white}
                    bgColor={color} />

            </View>


            <View style={{ flex: 1,alignItems: 'flex-start' }}>
                <Text style={header3Style}>{header} </Text>
                <Text style={themeComponent.text.headerTextbox}>{description} </Text>
            </View>

        </TouchableOpacity>
    )
}