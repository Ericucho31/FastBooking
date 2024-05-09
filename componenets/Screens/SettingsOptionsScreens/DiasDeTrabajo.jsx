import React from "react";
import { Text, View } from "react-native";
import BigIconButton from "../../Buttons/BigIconButton";
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import CheckboxDay from "../../Others/CheckboxDay";

export default function DiasDeTrabajo() {

    const navigation = useNavigation();

    const Back = () => {
        navigation.navigate('Home')
    }

    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <View style={{ position: 'absolute', alignSelf: 'flex-start', height: '90%' }}>
                <BigIconButton icon={'arrow-back-outline'} iconColor={'gray'} bgColor={'transparent'} onPress={Back} />
            </View>

            <Text>Configurar días de trabajo</Text>

            {diasSemana.map((item, index) => (
                <CheckboxDay 
                    key={index}
                    day={item} 
                />
            ))}
        </View>
    )
}