import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { WebView } from 'react-native-webview';

import { GetAllAvailableDates, GetDateById } from "../Handler/API/APIHandler";
import RegisterModal from "../Modals/RegisterModal";
import { Button } from "@rneui/base";
import { useDataContext } from "../Context/GlobalStateContext";

export default function PruebaScreen() {

    const { state, dispatch } = useDataContext()

    const allDates = async () => {
        const allDates = await GetAllAvailableDates({ status: 1 })
        console.log(JSON.stringify(allDates, null, 2));
        return allDates;
    }
    const userDates = async () => {
        const userDates = await GetDateById({ id: 2 })
        console.log(JSON.stringify(userDates, null, 2));
        return userDates;
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVIsible] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await userDates();
                setData(result);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    const update = async () => {
        try {
            const dates = await GetDateById({ id: state.userData.id, status: 2 })
            dispatch({ type: 'GET_DATES_BOOKED', payload: dates });

            const userDatesData = await GetDateById({ id: state.userData.id, status: 1 });
            dispatch({ type: 'SET_INITIAL_DATA', payload: userDatesData });

        } catch (error) {
            console.error('Error fetching data:', error);
        }

        const toggleVisibility = () => {
            setIsVIsible(!isVisible)
        }
    }


    return (
        <View style={styles.container}>
            <FlatList data={data}

                renderItem={({ item }) =>
                    <View>

                        <NewDateRequest
                            id={item.id}
                            name={item.clientName}
                            hour={item.startTime}
                            date={item.startDate}
                            imageSource={item.userImage} />
                        <Text>{item.clientName}</Text>

                    </View>
                } />

            <Button title={'Citas aceptadas'} onPress={() => console.log(JSON.stringify(state.citasAgendadas, null, 2))} />

            <Button title={'Actualizar'} onPress={update} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

