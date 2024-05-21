import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import TextInputSimple from "../TextBox/TextInputSimple";
import LoginButton from "../Buttons/LoginButton";
import SignInButton from "../Buttons/SignInButton";
import TextInputPassword from "../TextBox/TextInputPassword";
import BigLoginButton from "../Buttons/BigLoginButton";
import LoginComponent from "../Others/LoginComponent";

export default function Login({ navigation }) {

    return (
        <View>
            <View style={themeComponent.background.backgroundView}>
                <Image
                    style={themeComponent.images.thumbnail}
                    source={require('../../assets/logo.jpg')} />

                <LoginComponent/>

            </View>
        </View>
    )
}
