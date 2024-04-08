import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function LoginButton( {text, backgroundStyle, textStyle}) {
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
            android_ripple={{ color: 'white' }}
            style={[backgroundStyle, pressed && styles.buttonPressed]}
        >
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: themeComponent.colors.primary,
    },
});
