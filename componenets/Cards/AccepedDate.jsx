import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from "@rneui/base";

export default function AcceptedDate({color, onPress }) {

    const [expandido, setExpandido] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

    return (
        <View style={themeComponent.card.newDateRequest.mainContainer}>
            <Text>La cita ha sido aceptada</Text>
        </View>
 
    )
}