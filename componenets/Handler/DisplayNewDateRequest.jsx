import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDataContext } from '../Context/GlobalStateContext';
import NewDateRequest from '../Cards/NewDateRequest';
import NoCitasPendientes from '../Others/NoCItasPendientes';
import { GetDateById } from './API/APIHandler';

const DisplayNewDateRequests = () => {
    const { state, dispatch } = useDataContext();

    //console.log(JSON.stringify(state, null, 2));

    useEffect(() => {
        const fetchData = async () => {
            if (state.token) {
                try {
                    const userDatesData = await GetDateById({ id: state.userData.id });
                    dispatch({ type: 'SET_INITIAL_DATA', payload: userDatesData });

                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    },[]);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {state.citasPendientes.length === 0 && (<NoCitasPendientes></NoCitasPendientes>)}
            {state.citasPendientes.length > 0 && ( // Renderiza el FlatList solo si hay datos
                <FlatList
                    data={state.citasPendientes}
                    keyExtractor={cita => cita.id}
                    renderItem={({ item }) => (
                        <NewDateRequest
                            id={item.id}
                            name={item.clientName}
                            hour={item.startTime}
                            date={item.startDate}
                            imageSource={item.userImage} />
                    )}
                />
            )}
        </View>
    );
};

export default DisplayNewDateRequests;
