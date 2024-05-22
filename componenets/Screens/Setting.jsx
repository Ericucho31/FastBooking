import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import themeComponent from "../Theme/themeComponent";
import SettingsCard from "../Cards/SettingsCard";
import { Divider } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "../../FirebaseConfig";

export default function SettingsScreen({}) {
    const navigation = useNavigation();
    

    const LogOut = () => {
        FIREBASE_AUTH.signOut()
    }

    const DiasDeTrabajo = () => {
        navigation.navigate('DiasDeTrabajoSetting')
    }

    return (
        <View style={{  backgroundColor: 'white' }}>

            <View style={{ justifyContent:'center',alignItems: 'center'}}>
                <Image style={themeComponent.images.settings} source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*' }} />
                <Text style={themeComponent.headers.header3}>Dr. Heriberto Torres Magón</Text>
            </View>

            <SettingsCard icon={'close-circle-outline'}
                iconColor={themeComponent.colors.dangerRed}
                cardName={'Bloquear agenda'}
                textColor={themeComponent.text.cancelar} />

            <SettingsCard icon={'log-out-outline'}
                iconColor={themeComponent.colors.borderGray}
                cardName={'Cerrar Sesión'}
                textColor={themeComponent.text.logOut} 
                onPress={LogOut}/>

        </View>
    );
}
