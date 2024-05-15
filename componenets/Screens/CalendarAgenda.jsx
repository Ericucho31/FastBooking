import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { useDataContext } from "../Context/GlobalStateContext";
import CalendarDate2 from "../Cards/CalendarDate2";

export default function CalendarAgendaScreen() {

    const { state, dispatch } = useDataContext();

    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                items={state.citasAgendadas}
                renderEmptyDate={() => {
                    return <View>
                        <Text>No hay citas para este día </Text>
                    </View>;
                }}

                renderItem={(item, isFirst) => (
                    <CalendarDate2
                        id={item.data.id}
                        imageSource={item.data.imageSource}
                        date={item.data.date}
                        name={item.data.name}
                        hour={item.data.hour} />

                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

