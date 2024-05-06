import React, { useState } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider, Avatar } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigIconButton from "../Buttons/BigIconButton";
import SimpleModal from "../Modals/SimpleModal";

export default function NewDateRequest({ imageSource, name, date, hour }) {

    const [expandido, setExpandido] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [modalVisibility, setModalVisibility] = useState(false);

    // Función para cambiar la visibilidad del modal
    const toggleModalVisibility = () => {
        setModalVisibility(!modalVisibility);
    };

    const accionarBotonOpciones = () => {
        if (expandido) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();

        } else {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        setExpandido(!expandido)
    }

    const heightInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50], // Adjust height as needed
    });

    const animatedStyle = {
        height: heightInterpolate,
        width: '100%',
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
                </View>

                <View style={{}}>
                    <View style={{ marginBottom: 5 }}>
                        <BigIconButton
                            icon={'checkmark-outline'}
                            iconColor={'white'}
                            bgColor={themeComponent.colors.primary} />

                    </View>

                    <BigIconButton
                        icon={'ellipsis-horizontal'}
                        iconColor={'white'}
                        bgColor={'gray'}
                        onPress={accionarBotonOpciones} />
                </View>

            </View>

            <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, animatedStyle]}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
                    onPress={toggleModalVisibility}>
                    <View >
                        <Text style={themeComponent.text.cancelar}>Denegar</Text>
                    </View>

                </TouchableOpacity>

                <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={toggleModalVisibility}>
                    <View>
                        <Text style={themeComponent.headers.header3}>Reagendar</Text>
                    </View>
                </TouchableOpacity>

                <SimpleModal isVisible={modalVisibility} toggleModalVisibility={toggleModalVisibility} />

            </Animated.View>

        </View>
    )
}