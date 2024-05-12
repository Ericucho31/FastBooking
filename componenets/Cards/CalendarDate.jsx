import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import HourTag from "../Tags/HourTag";
import BigIconButton from "../Buttons/BigIconButton";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function CalendarDate({ imageSource, name, hour, id }) {

    return (
        <View style={themeComponent.card.calendarDate.dateBookedContainer}>
            <View style={themeComponent.card.calendarDate.imageContainer}>
                <Image
                    source={{ uri: imageSource }}
                    style={themeComponent.images.calendarDate} />
            </View>

            <View style={themeComponent.card.calendarDate.textContainer}>
                <Text style={themeComponent.headers.header3}>{name}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <HourTag text={hour} />
                </View>

            </View>

            <BigIconButton icon={"chatbubble-ellipses-outline"} iconColor={"white"} bgColor={themeComponent.colors.primary} />

            <BigIconButton
                icon={'ellipsis-horizontal'}
                iconColor={'white'}
                bgColor={'gray'} />
        </View>

    )

}