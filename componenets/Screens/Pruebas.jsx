import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View , FlatList} from "react-native";

import { GetAllAvailableDates, GetDateById } from "../Handler/API/APIHandler";
import NewDateRequest from "../Cards/NewDateRequest";

export default function PruebaScreen() {

    const allDates= async () => {
        const allDates = await GetAllAvailableDates({status:1})
        console.log(JSON.stringify(allDates, null, 2));
        return allDates;
    }
    const userDates = async () => {
        const userDates = await GetDateById({id:2})
        console.log(JSON.stringify(userDates, null, 2));
        return userDates;
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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



    return (
        <View style={styles.container}>
            <FlatList data={data} 
            
            renderItem={({item}) => 
                <View>
                    <NewDateRequest 
                    id={item.id}
                    name={item.clientName}
                    hour={item.startTime} 
                    date={item.startDate}
                    imageSource={item.userImage}/>
                    <Text>{item.clientName}</Text>
                </View>
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

