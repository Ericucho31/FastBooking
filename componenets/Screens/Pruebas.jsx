import React, { useState } from "react";
import { View, Button, ScrollView } from "react-native";
import CalendarDate2 from "../Cards/CalendarDate2";
import themeComponent from "../Theme/themeComponent";
import NewDateRequest from "../Cards/NewDateRequest";

export default function PruebaScreen() {


    return (
        <ScrollView>
            <View style={themeComponent.background.backgroundView}>

                <CalendarDate2 name={"Pedro Jimenez Ruiz"}
                    date={"12 de junio"}
                    hour={"18:00"}
                    imageSource={"https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp"}
                    id={1000} />

            </View>

        </ScrollView>

    );
}
