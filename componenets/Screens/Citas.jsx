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
                    return (<NewDateRequest imageSource={'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp'}
                        name={item.nombre}
                        hour={item.hora}
                        date={item.fecha} />
                    )
                })}




            </View>

        </ScrollView>
    )
}
