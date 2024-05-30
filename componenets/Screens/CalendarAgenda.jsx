import React, { useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { useDataContext } from "../Context/GlobalStateContext";
import CalendarDate2 from "../Cards/CalendarDate2";
import CreateNewDate from "../Modals/CreateNewDate";
import themeComponent from "../Theme/themeComponent";
import { GetDateById } from "../Handler/API/APIHandler";

export default function CalendarAgendaScreen() {

    const { state, dispatch } = useDataContext();
    const [visibility, setVisibility] = useState('flex');
    const [citas, setCitas] = useState();


    const changeVIsibility = (visibility) => {
        if (visibility === 'none')
            setVisibility('flex')
        else
            setVisibility('none')
    }

    /*useEffect(() => {
        const GetDatesBooked = async () => {
                try {
                    

                } catch (error) {
                    console.error('Error al obtener las citas agendadas de la agenda:', error);
                }
            
        };
        GetDatesBooked();
    },[]);*/

    const refresh = async () => {
        const dates = await GetDateById({ id: state.userData.id, status: 2 })
          dispatch({ type: 'GET_DATES_BOOKED', payload: dates });
    }

    console.log(JSON.stringify(state.citasAgendadas, null, 2));


    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                items={state.citasAgendadas}
                onRefresh={refresh}
                renderEmptyData={() => {
                    return <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Text style={themeComponent.headers.header3}>No hay citas para este día </Text>
                    </View>;
                }}
                

                renderItem={(item, firstItemInDay) => (
                    <View>
                        {firstItemInDay && (
                            <Text style={{ fontSize: 16, marginVertical: 10 }}>
                                {item.data.date}
                            </Text>
                        )}
                        <CalendarDate2
                            id={item.data.id}
                            imageSource={item.data.imageSource}
                            date={item.data.date}
                            name={item.data.name}
                            hour={item.data.hour}
                        />
                    </View>
                )}
                showClosingKnob={true}

                onCalendarToggled={calendarOpened => {
                    if (calendarOpened) {
                        setVisibility('none')
                    }
                    else
                        setVisibility('flex')

                }}
            />
            <View style={{ height: '100%', position: 'absolute', display: visibility, justifyContent: 'flex-end', alignSelf: 'center', }}>
                <CreateNewDate></CreateNewDate>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

