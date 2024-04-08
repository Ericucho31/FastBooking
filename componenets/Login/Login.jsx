import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import TextInputSimple from "../TextBox/TextInputSimple";
import LoginButton from "../Buttons/LoginButton";
import TextInputPassword from "../TextBox/TextInputPassword";

export default function Login() {

    return (
        <ScrollView>
            <View style={themeComponent.background.backgroundView}>
                <Image
                    style={themeComponent.images.thumbnail}
                    source={require('../../assets/logo.jpg')} />

                <TextInputSimple 
                    encabezado={'Correo Electrónico'} 
                    nombre={"ejemplo@ejemplo.com"} />
                    
                <TextInputPassword 
                    nombre={"**********"} />

                <LoginButton
                    text={'Iniciar Sesión'}
                    backgroundStyle={themeComponent.buttons.login}
                    textStyle={themeComponent.text.loginText} />

                <LoginButton
                    text={'Registrarse'}
                    backgroundStyle={themeComponent.buttons.signIn}
                    textStyle={themeComponent.text.signInText} />
            </View>
        </ScrollView>
    )
}
