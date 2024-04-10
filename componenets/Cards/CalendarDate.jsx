import React from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import FirstTimeButton from "../Tags/FirstTimeTag";
import HourTag from "../Tags/HourTag";
import MessageButton from "../Buttons/MessageButton";
import OptionsButton from "../Buttons/OptionsButton";


export default function CalendarDate({ imageSource, name, date, hour }) {

    return (
        <View style={themeComponent.card.calendarDate.dateBookedContainer}>
            <View style={themeComponent.card.calendarDate.imageContainer}>
                <Image
                    source={{ uri: imageSource }}
                    style={themeComponent.images.micro} />
            </View>

            <View style={themeComponent.card.calendarDate.textContainer}>
                <Text style={themeComponent.headers.header3}>{name}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <FirstTimeButton text={'Primera Vez'} />
                    <HourTag text={hour} />
                </View>

            </View>

            <MessageButton />

            <View>
                <OptionsButton />
            </View>

        </View>

    )

}