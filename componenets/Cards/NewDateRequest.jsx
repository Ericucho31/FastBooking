import React from "react";
import { View, Text, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider, Avatar } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigIconButton from "../Buttons/BigIconButton";

export default function NewDateRequest({ imageSource, name, date, hour }) {


    return (
        <View style={themeComponent.card.newDateRequest.mainContainer}>
            <View style={{ flexDirection: 'row', alignItems:'center'}}>
                <Ionicons name={'calendar-outline'} size={16} color={themeComponent.colors.primary} />
                <Text style={themeComponent.headers.header3}>30 abril, 12:00 p.m.</Text>
            </View>

            <Divider orientation="vertical" width={1}></Divider>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, }}>
                <Image
                    style={themeComponent.images.newDateRequest}
                    source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }} />

                <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                <View style={{width: '50%'}}>
                    <Text style={themeComponent.headers.header3}>Emilio Francisco Perez Villavicencio</Text>
                </View>

                <View style={{}}>
                    <View style={{marginBottom:5}}>
                        <BigIconButton 
                            icon={'checkmark-outline'} 
                            iconColor={'white'} 
                            bgColor={themeComponent.colors.primary} />

                    </View>

                    <BigIconButton 
                        icon={'ellipsis-horizontal'} 
                        iconColor={'white'} 
                        bgColor={'gray'} />
                </View>

            </View>
            
        </View>
    )
}