import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Months from "../Scrollables/Months";
import Days from "../Scrollables/Days";
import CalendarDate from "../Cards/CalendarDate";

export default function Calendario() {

    return (
        <View style={{ alignItems: 'center', }}>
            <Months></Months>
            <Days></Days>

            
                <CalendarDate imageSource={'https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp'}
                    name={'Juan Rodriguez Torres de la Cruz'}
                    hour={'12:00'} />

                <CalendarDate imageSource={'https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_680'}
                    name={'Irene López Saenz'}
                    hour={'16:00'} />

                <CalendarDate imageSource={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg'}
                    name={'Sabastián Garcia Carranza'}
                    hour={'12:00'} />
                <CalendarDate imageSource={'https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp'}
                    name={'Jessica Hurtado Sánchez'}
                    hour={'14:00'} />

            

        </View>
    )
}
