import React, { useState } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigIconButton from "../Buttons/BigIconButton";
import SimpleModal from "../Modals/SimpleModal";
import ConfirmationModal from "../Modals/ConfirmationModal";
import useAnimation from "./logicJS/animationNewDateRequest";
import RescheduleModal from "./RescheduleModal";
import { useDataContext } from '../Context/GlobalStateContext';
import { DeleteDateById, UpdatedDate } from "../Handler/API/APIHandler";
import { convertirFecha, obtenerHoraActual } from "../Handler/FormatoFechas";

export default function CalendarDate2({ imageSource, name, date, hour, id }) {
    const { state, dispatch } = useDataContext();

    const { toggleAnimation, animatedStyle } = useAnimation();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalReagendar, setModalReagendar] = useState(false);

    const [fechaRecibida, setFechaRecibida] = useState(date);
    const [horaRecibida, setHoraRecibida] = useState(hour);

    // Función para cambiar la visibilidad del modal
    const toggleModalVisibility = () => {
        setModalVisibility(!modalVisibility);
    };

    // Función para cambiar la visibilidad del modal
    const toggleModalReagendar = () => {
        setModalReagendar(!modalReagendar);
    };

    // Función para manejar la actualización de la fecha
    const handleDateUpdate = (newDate) => {
        const fechaFormato= convertirFecha(newDate.toLocaleDateString())
        setFechaRecibida(fechaFormato)
        const horaFormato = obtenerHoraActual(newDate)
        setHoraRecibida(horaFormato)

        UpdatedDate({data:state.citasAgendadas, id: id, hour: horaFormato, date:fechaFormato})
        //manejo del resto de actualizaciones para la nueva fecha
    };

    const removeDate = async (fecha, id) => {
        console.log(id)
        DeleteDateById({id:id});
        const dates = await GetDateById({ id: state.userData.id, status: 2 })
          dispatch({ type: 'GET_DATES_BOOKED', payload: dates });
    };

    return (
        <View style={themeComponent.card.newDateRequest.mainContainer}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={'calendar-outline'} size={16} color={themeComponent.colors.primary} />
                <Text style={themeComponent.headers.header3}> {horaRecibida} </Text>
            </View>

            <Divider orientation="vertical" width={1}></Divider>

            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5, }}>
                    <Image
                        style={themeComponent.images.newDateRequest}
                        source={{ uri: imageSource }} />


                    <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                    <View style={{ width: '50%' }}>
                        <Text style={themeComponent.headers.header3}>{name}</Text>
                    </View>

                    <BigIconButton
                        icon={'ellipsis-horizontal'}
                        iconColor={'white'}
                        bgColor={'gray'}
                        onPress={toggleAnimation} />
                </View>

            </View>

            <Animated.View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, animatedStyle]}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
                    onPress={toggleModalVisibility}>
                    <Text style={themeComponent.text.cancelar}>Denegar</Text>
                </TouchableOpacity>

                <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}
                    onPress={toggleModalReagendar}>
                    <Text style={themeComponent.headers.header3}>Reagendar</Text>
                </TouchableOpacity>

            </Animated.View>

            <SimpleModal isVisible={modalReagendar} toggleModalVisibility={toggleModalReagendar}
                Component={<RescheduleModal onDateSelected={handleDateUpdate}
                    SimpleModalToggle={toggleModalReagendar} />} />


            <SimpleModal isVisible={modalVisibility} toggleModalVisibility={toggleModalVisibility}
                Component={<ConfirmationModal name={name}
                    onCancel={toggleModalVisibility}
                    onPress={() => removeDate(fechaRecibida, id)} />} />

        </View>
    )
}
