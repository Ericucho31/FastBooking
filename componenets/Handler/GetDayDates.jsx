import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Button, Modal, } from "react-native";
import themeComponent from "../Theme/themeComponent";
import CalendarDate from "../Cards/CalendarDate";


export default function GetDayDates() {

    const JsonEjemplo= [
        {
            imageSource:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP-lSza80x010-8Qiymbco975wl0qdIsa5O5PrAOdAQ&s",
            name:"Lic. Valeriano",
            hour:"12:00",
        },
        {
            imageSource:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP-lSza80x010-8Qiymbco975wl0qdIsa5O5PrAOdAQ&s",
            name:"Pedro Perez",
            hour:"14:00",
        },
        {
            imageSource:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgP-lSza80x010-8Qiymbco975wl0qdIsa5O5PrAOdAQ&s",
            name:"María Mercedez",
            hour:"15:30",
        },
    ]

    return(
        

        <View>
        {JsonEjemplo.map((item, index) => (
          <CalendarDate 
          key={index}
          imageSource={item.imageSource} 
          name={item.name} 
          hour={item.hour}
          />
        ))}
      </View>
    )
}