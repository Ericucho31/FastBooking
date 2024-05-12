
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDataContext } from '../Context/GlobalStateContext';
import CalendarDate from '../Cards/CalendarDate';

const CalendarDateBooked = () => {
    const { state, dispatch } = useDataContext();


    return (
        <FlatList data={state.citasAgendadas}
            keyExtractor={cita => cita.id}
            renderItem={({ item }) => (

                <CalendarDate name={item.name}
                    hour={item.hour}
                    imageSource={item.imageSource} 
                    id ={item.id}/>
            )} />

    );
};

export default CalendarDateBooked;