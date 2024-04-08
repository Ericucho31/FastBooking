import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function SignInButton( {navigation, text}) {
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
            onPress={() => navigation.navigate('Home')}
            android_ripple={{ color: themeComponent.colors.primary}}
            style={[themeComponent.buttons.signIn, pressed && styles.buttonPressed]}
        >
            <Text style={themeComponent.text.signInText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: 'white',
    },
});
