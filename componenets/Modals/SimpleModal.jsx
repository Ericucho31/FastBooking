import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button, Modal, } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SimpleModal({ isVisible, toggleModalVisibility, Component }) {

    return (
        <View>

            <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType='fade' transparent={true}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                    <View style={{ borderRadius: 30, padding: 15, backgroundColor: 'white' }}>
                        <Ionicons name={'close'} size={28} color={'red'} onPress={toggleModalVisibility} />
                        {Component}
                    </View>
                </View>
            </Modal>
        </View>

    )
}
