import React, { useState } from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";

export default function LoginFacebookButton( {navigation}) {
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
            android_ripple={{ color: 'white' }}
            style={[themeComponent.buttons.login, pressed && styles.buttonPressed]}
        >
            <Image 
            source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png' }}
            style={themeComponent.images.facebookButton}/>
            <Text style={themeComponent.text.loginFacebook}>Ingresar con Facebook</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: themeComponent.colors.primary,
    },
});
