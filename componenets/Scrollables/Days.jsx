import React from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import themeComponent from '../Theme/themeComponent';

export default function Days() {
    const DATA = [
        { id: 1, day: 'Lunes' , number:'1'}, 
        { id: 2, day: 'Martes' , number:'2'}, 
        { id: 3, day: 'Miérc.' , number:'3'}, 
        { id: 4, day: 'Jueves' , number:'4'}, 
        { id: 5, day: 'Viernes' , number:'5'}, 
        { id: 6, day: 'Sábado' , number:'6'}, 
        { id: 7, day: 'Domingo' , number:'7'}, 
        { id: 8, day: 'Lunes' , number:'8'}, 
        { id: 9, day: 'Martes' , number:'9'}, 
        { id: 10, day: 'Miérc.' , number:'10'}, 
        { id: 11, day: 'Jueves' , number:'11'}, 
        { id: 12, day: 'Viernes' , number:'12'}, 
        { id: 13, day: 'Sábado' , number:'13'}, 
        { id: 14, day: 'Domingo' , number:'14'}, 
        { id: 15, day: 'Lunes' , number:'15'}, 
        { id: 16, day: 'Martes' , number:'16'}, 
        { id: 17, day: 'Miérc.' , number:'17'}, 
        { id: 18, day: 'Jueves' , number:'18'}, 
        { id: 19, day: 'Viernes' , number:'19'}, 
        { id: 20, day: 'Sábado' , number:'20'}, 
        { id: 21, day: 'Domingo' , number:'21'}, 
        { id: 22, day: 'Lunes' , number:'22'}, 
        { id: 23, day: 'Martes' , number:'23'}, 
        { id: 24, day: 'Miérc.' , number:'24'}, 
        { id: 25, day: 'Jueves' , number:'25'}, 
        { id: 26, day: 'Viernes' , number:'26'}, 
        { id: 27, day: 'Sábado' , number:'27'}, 
        { id: 28, day: 'Domingo' , number:'28'}, 
    ]

    const SingelDay = ({ day, number }) => (
        <View style={{ margin:3 }}>
            <TouchableOpacity style={themeComponent.scrollables.days.unselected}>
                <Text style={themeComponent.text.days.unselected}>{number}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false} 
            renderItem={({ item }) => <SingelDay day={item.day} number={item.number}/>}
            keyExtractor={singleMonth => singleMonth.id}/>

    )
}