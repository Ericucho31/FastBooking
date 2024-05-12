import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDataContext } from '../Context/GlobalStateContext';
import NewDateRequest from '../Cards/NewDateRequest';
import NoCitasPendientes from '../Others/NoCItasPendientes';

const DisplayNewDateRequests = () => {
    const { state, dispatch } = useDataContext();

    console.log(state)

    return (
        <View style={{ flex: 1 }}>
            {state.citasPendientes.length === 0 && (<NoCitasPendientes></NoCitasPendientes>) } 
            {state.citasPendientes.length > 0 && ( // Renderiza el FlatList solo si hay datos
                <FlatList
                    data={state.citasPendientes}
                    keyExtractor={cita => cita.id}
                    renderItem={({ item }) => (
                        <NewDateRequest
                            name={item.name}
                            hour={item.hour}
                            date={item.date}
                            imageSource={item.imageSource}
                            id={item.id}
                        />
                    )}
                />
            )}
        </View>
    );
};

export default DisplayNewDateRequests;
