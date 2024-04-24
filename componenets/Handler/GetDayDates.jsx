import React from "react";
import { View } from "react-native";
import CalendarDate from "../Cards/CalendarDate";

export default function GetDayDates({ jsonData }) {
    return (
        <View>
            {jsonData.map((item, index) => (
                <CalendarDate 
                    key={index}
                    imageSource={item.imageSource} 
                    name={item.name} 
                    hour={item.hour}
                />
            ))}
        </View>
    );
}
