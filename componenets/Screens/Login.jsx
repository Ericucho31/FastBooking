import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import TextInputSimple from "../TextBox/TextInputSimple";
import LoginButton from "../Buttons/LoginButton";
import SignInButton from "../Buttons/SignInButton";
import TextInputPassword from "../TextBox/TextInputPassword";
import LoginFacebookButton from "../Buttons/LoginFacebookButton";

export default function Login({ navigation }) {

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
                    navigation={navigation}
                    text={'Iniciar Sesión'}
                />

                <SignInButton
                    navigation={navigation}
                    text={'Registrarse'} />

                <LoginFacebookButton 
                    navigation={navigation}/>
            </View>
        </ScrollView>
    )
}
