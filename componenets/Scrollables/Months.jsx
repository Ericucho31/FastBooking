import React from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import themeComponent from '../Theme/themeComponent';

export default function Months() {
    const DATA = [
        { id: 1, month: 'Enero' }, { id: 2, month: 'Febrero' }, { id: 3, month: 'Marzo' }, { id: 4, month: 'Abril' },
        { id: 5, month: 'Mayo' }, { id: 6, month: 'Junio' }, { id: 7, month: 'Julio' }, { id: 8, month: 'Agosto' },
        { id: 9, month: 'Septiembre' }, { id: 10, month: 'Octubre' }, { id: 11, month: 'Noviembre' }, { id: 12, month: 'Dicembre' },
    ]

    const SingleMonth = ({ month }) => (
        <View style={{ margin:3 }}>
            <TouchableOpacity style={themeComponent.scrollables.months.selected}>
                <Text style={themeComponent.text.months.selected}>{month}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false} 
            renderItem={({ item }) => <SingleMonth month={item.month} />}
            keyExtractor={singleMonth => singleMonth.id}/>

    )
}