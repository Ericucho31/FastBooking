
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDataContext } from '../Context/GlobalStateContext';
import NewDateRequest from '../Cards/NewDateRequest';

const DisplayNewDateRequests = () => {
    const { state, dispatch } = useDataContext();

    console.log(state)

    return (
        <FlatList data={state.citasPendientes}
            keyExtractor={cita => cita.id}
            renderItem={({ item }) => (

                <NewDateRequest name={item.name}
                    hour={item.hour}
                    date={item.date}
                    imageSource={item.imageSource} 
                    id ={item.id}/>
            )} />

    );
};

export default DisplayNewDateRequests;