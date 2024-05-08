import React from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import HourTag from "../Tags/HourTag";
import DateTag from "../Tags/DateTag";

export default function DateBooked({ imageSource, name, date, hour }) {

    return (
        <View style={themeComponent.card.dateBookedContainer}>
            <View style={themeComponent.card.imageContainer}>
                <Image
                    source={{ uri: imageSource }}
                    style={themeComponent.images.mini}/>
            </View>

            <View style={themeComponent.card.textContainer}>
                <Text style={themeComponent.headers.header3}>{name}</Text>
                
                <View style={{flexDirection:'row', marginBottom:10}}>
                    <HourTag text={hour} />
                    <DateTag text={date} />
                </View>

                <View style={{flexDirection:'row', }}>
                </View>
            </View>

        </View>

    )

}