import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { WebView } from 'react-native-webview';

import { GetAllAvailableDates, GetDateById } from "../Handler/API/APIHandler";
import { Button } from "@rneui/base";
import { useDataContext } from "../Context/GlobalStateContext";
import PaypalPayment from "../Modals/PaypalPayment";
import SimpleModal from "../Modals/SimpleModal";

export default function PruebaScreen() {

    const { state, dispatch } = useDataContext()

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

    const toggleVisibility = () => {
        setIsVIsible(!isVisible)
    }

    const update = async () => {
        try {
            const dates = await GetDateById({ id: state.userData.id, status: 2 })
            dispatch({ type: 'GET_DATES_BOOKED', payload: dates });

            const userDatesData = await GetDateById({ id: state.userData.id, status: 1 });
            dispatch({ type: 'SET_INITIAL_DATA', payload: userDatesData });

        } catch (error) {
            console.error('Error fetching data:', error);
        }

        toggleVisibility()
    }


    return (
        <View style={styles.container}>

            <PaypalPayment link={'https://www.sandbox.paypal.com/checkoutnow?token=25S9319297123101P'} />

            <Button title={'Actualizar'} onPress={update} />
            <Button title={'Visible'} onPress={toggleVisibility} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

