import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import NewDateRequest from "../Cards/NewDateRequest";
import CitasJson from "../../ddinamico.json"

export default function Citas() {
    console.log(CitasJson)

    return (
        <ScrollView>
            <View style={themeComponent.background.backgroundView}>
                {CitasJson.citas.map((item) => {
                    return (<NewDateRequest imageSource={item.imageSource}
                        name={item.name}
                        hour={item.hour}
                        date={item.date} />
                    )
                })}

            </View>

        </ScrollView>
    )
}
