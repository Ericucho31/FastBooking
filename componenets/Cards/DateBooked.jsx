import React from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import FirstTimeButton from "../Tags/FirstTimeTag";
import HourTag from "../Tags/HourTag";
import DateTag from "../Tags/DateTag";
import AcceptButton from "../Buttons/AcceptButton";
import DeclineButton from "../Buttons/DeclineButton";

export default function DateBooked({ imageSource, name, date, hour }) {

    return (
        <View style={themeComponent.card.dateBookedContainer}>
            <View style={themeComponent.card.imageContainer}>
                <Image
                    source={{ uri: imageSource }}
                    style={themeComponent.images.mini}>
                </Image>
            </View>

            <View style={themeComponent.card.textContainer}>
                <Text style={themeComponent.headers.header3}>{name}</Text>
                <FirstTimeButton text={'Primera Vez'} />
                <View style={{flexDirection:'row', marginBottom:20}}>
                    <HourTag text={hour} />
                    <DateTag text={date} />
                </View>

                <View style={{flexDirection:'row', justifyContent:'flex'}}>
                    <DeclineButton />
                    <AcceptButton />
                </View>
            </View>
        </View>

    )

}