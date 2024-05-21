import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function LoginButton( {onPress, text}) {
    const [pressed, setPressed] = useState(false);

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
            onPress={onPress}
            android_ripple={{ color: 'white' }}
            style={[themeComponent.buttons.login, pressed && styles.buttonPressed]}
        >
            <Text style={themeComponent.text.loginText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: themeComponent.colors.primary,
    },
});
