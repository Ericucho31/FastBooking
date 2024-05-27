import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import themeComponent from "../Theme/themeComponent";
import SettingsCard from "../Cards/SettingsCard";
import { Divider } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { useDataContext } from "../Context/GlobalStateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsScreen({}) {
    const navigation = useNavigation();
    const { state, dispatch } = useDataContext();
    const {userImageUri, setUserImageUri} = useState();

    const LogOut = () => {
        FIREBASE_AUTH.signOut()
    }

    const DiasDeTrabajo = () => {
        navigation.navigate('DiasDeTrabajoSetting')
    }

    const setErrorImage = () => {
        setUserImageUri('https://cdn-icons-png.flaticon.com/512/9131/9131529.png')
    }

    const removeToken = async () => {
        try {
          await AsyncStorage.removeItem('jwtToken');
          dispatch({ type: 'SET_USER_TOKEN', payload: {} });
        } catch (error) {
          console.error('Error removing token', error);
        }
      };

      useEffect(() => {
        const fetchImageUrl = async () => {
          try {
            const imagenUri = await state.userData.imageUrl;
            setUserImageUri(imagenUri)
          } catch (err) {
            setError('Error al cargar la imagen');
          } 
        };
    
        fetchImageUrl();
      }, []);

    return (
        <View style={{  backgroundColor: 'white' }}>

            <View style={{ justifyContent:'center',alignItems: 'center'}}>
                <Image style={themeComponent.images.settings} source={{ uri: userImageUri }} onError={() =>setErrorImage}/>
                <Text style={themeComponent.headers.header3}>{state.userData.fullName}</Text>
            </View>

            <SettingsCard icon={'close-circle-outline'}
                iconColor={themeComponent.colors.dangerRed}
                cardName={'Bloquear agenda'}
                textColor={themeComponent.text.cancelar} />

            <SettingsCard icon={'log-out-outline'}
                iconColor={themeComponent.colors.borderGray}
                cardName={'Cerrar Sesión'}
                textColor={themeComponent.text.logOut} 
                onPress={removeToken}/>

        </View>
    );
}
