import React, { useState } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigIconButton from "../Buttons/BigIconButton";
import SimpleModal from "../Modals/SimpleModal";
import ConfirmationModal from "../Modals/ConfirmationModal";
import useAnimation from "./logicJS/animationNewDateRequest";

export default function NewDateRequest({ imageSource, name, date, hour }) {
    const { toggleAnimation, animatedStyle } = useAnimation();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [aceptado, setAceptado] = useState(true);
    const [denegado, setDenegado] = useState('no denegado');

    // Función para cambiar la visibilidad del modal
    const toggleModalVisibility = () => {
        setModalVisibility(!modalVisibility);
    };

    return (
        <View style={themeComponent.card.newDateRequest.mainContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={'calendar-outline'} size={16} color={themeComponent.colors.primary} />
                <Text style={themeComponent.headers.header3}>{date}, {hour} </Text>
            </View>

            <Divider orientation="vertical" width={1}></Divider>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, }}>
                <Image
                    style={themeComponent.images.newDateRequest}
                    source={{ uri: imageSource }} />

                <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                <View style={{ width: '50%' }}>
                    <Text style={themeComponent.headers.header3}>{name}</Text>
                    <Text>{denegado}</Text>
                </View>

                <View>
                    <View style={{ marginBottom: 5 }}>
                        <BigIconButton
                            icon={'checkmark-outline'}
                            iconColor={'white'}
                            bgColor={themeComponent.colors.primary}
                        />
                    </View>

                    <BigIconButton
                        icon={'ellipsis-horizontal'}
                        iconColor={'white'}
                        bgColor={'gray'}
                        onPress={toggleAnimation} />
                </View>

            </View>

            <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, animatedStyle]}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
                    onPress={toggleModalVisibility}>
                    <Text style={themeComponent.text.cancelar}>Denegar</Text>
                </TouchableOpacity>

                <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={toggleModalVisibility}>
                    <Text style={themeComponent.headers.header3}>Reagendar</Text>
                </TouchableOpacity>

                <SimpleModal isVisible={modalVisibility} toggleModalVisibility={toggleModalVisibility}
                    Component={<ConfirmationModal name={name}
                        onCancel={toggleModalVisibility}
                        onPress={() => setDenegado('denegado')} />} />
            </Animated.View>

        </View>
    )
}
