import React, { useState } from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function BigLoginButton({text, iconName, iconColor, bgColor}) {
    const [pressed, setPressed] = useState(false);

    const navigation = useNavigation();

    const handlePressIn = () => {
        setPressed(true);
    };

    const handlePressOut = () => {
        setPressed(false);
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate('Home')}
            android_ripple={{ color: 'white' }}
            style={[themeComponent.buttons.facebookLogin, pressed && styles.buttonPressed]}
        >
            <Ionicons name={iconName} color={iconColor} size={36} />
            <Text style={themeComponent.text.loginFacebook}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: themeComponent.colors.primary,
    },
});
