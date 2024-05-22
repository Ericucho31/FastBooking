import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { useDataContext } from "../Context/GlobalStateContext";
import BigIconButton from "../Buttons/BigIconButton";
import { GetAllAvailableDates } from "../Handler/API/APIHandler";

export default function PruebaScreen() {

    const { state, dispatch } = useDataContext();
    

    return (
        <SafeAreaView style={styles.container}>
            <BigIconButton icon={'menu'} iconColor={'white'} bgColor={themeComponent.colors.primary} onPress={console.log(GetAllAvailableDates(1))}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

