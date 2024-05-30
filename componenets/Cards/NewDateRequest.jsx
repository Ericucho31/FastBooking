import React, { useRef, useState } from "react";
import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import themeComponent from "../Theme/themeComponent";
import { Divider } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import BigIconButton from "../Buttons/BigIconButton";
import SimpleModal from "../Modals/SimpleModal";
import ConfirmationModal from "../Modals/ConfirmationModal";
import useAnimation from "./logicJS/animationNewDateRequest";
import AcceptedDate from "./AccepedDate";
import RescheduleModal from "./RescheduleModal";
import { useDataContext } from '../Context/GlobalStateContext';
import convertirFecha from "../Handler/ConvertirFecha";
import { ConfirmRequestedDate, DeleteDateById } from "../Handler/API/APIHandler";

export default function NewDateRequest({ imageSource, name, date, hour, id }) {
    const { state, dispatch } = useDataContext();
    const timeoutRef = useRef(null);

    const { toggleAnimation, animatedStyle } = useAnimation();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalReagendar, setModalReagendar] = useState(false);

    const [fechaRecibida, setFechaRecibida] = useState(date);
    const [horaRecibida, setHoraRecibida] = useState(hour);

    const [imageUrl, setImageUrl] = useState(imageSource);
    const fallbackImageSource = 'https://cdn-icons-png.flaticon.com/512/9131/9131529.png';

    const [aceptado, setAceptado] = useState(false);
    const [finalizado, setFinalizado] = useState(true);

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
        setFechaRecibida(newDate.toDateString());
        setHoraRecibida(newDate.toTimeString());
        //manejo del resto de actualizaciones para la nueva fecha
    };

    const handleAccept = (id) => {
        setAceptado(true);

        timeoutRef.current = setTimeout(() => {
            setAceptado(false); // Oculta el componente después de 3 segundos
            confirmDate(id)
            removeDate(id)
        }, 3000); // 3000 milisegundos = 3 segundos

        //resto del acciones para manejar la aceptación de la cita
    }

    const confirmDate = id => {
        dispatch({ type: 'CONFIRM_DATE_REQUEST', payload: id });
        
        ConfirmRequestedDate({data: state.citasPendientes, id:id})
        
    };

    const removeDate = id => {
        dispatch({ type: 'REMOVE_DATE', payload: id });
        console.log(DeleteDateById({id:id}) )
    };

    const cancelarAccion = () => {
        setAceptado(false);
        clearTimeout(timeoutRef.current);
    }

    return (
        <View style={themeComponent.card.newDateRequest.mainContainer}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={'calendar-outline'} size={16} color={themeComponent.colors.primary} />
                <Text style={themeComponent.headers.header3}>{fechaRecibida}, {horaRecibida} </Text>
            </View>

            <Divider orientation="vertical" width={1}></Divider>

            <View style={{ flex: 1, width: '100%' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5, }}>
                    <Image
                        style={themeComponent.images.newDateRequest}
                        source={{ uri: imageUrl }}
                        onError={() => setImageUrl(fallbackImageSource)} />


                    <Divider orientation="vertical" width={1} style={{ margin: 10 }}></Divider>

                    <View style={{ width: '50%' }}>
                        <Text style={themeComponent.headers.header3}>{name}</Text>
                    </View>

                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <BigIconButton
                                icon={'checkmark-outline'}
                                iconColor={'white'}
                                bgColor={themeComponent.colors.primary}
                                onPress={() => handleAccept(id)}
                            />
                        </View>

                        <BigIconButton
                            icon={'ellipsis-horizontal'}
                            iconColor={'white'}
                            bgColor={'gray'}
                            onPress={toggleAnimation} />
                    </View>

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
                    onPress={() => removeDate(id)} />} />

            {aceptado && (<AcceptedDate name={name} onPress={cancelarAccion} />)}

        </View>
    )
}
