import React, { useState } from "react";
import { View, Modal, Text, Button } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import TextInputRegister from "../TextBox/TextInputRegister";
import TextInputPassword from "../TextBox/TextInputPassword";
import { CreateNewUser } from "../Handler/API/APIHandler";

export default function RegisterModal({ isVisible, toggleModalVisibility }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const datosIngresados = async () => {

        if (validateEmail(email) == false) {
            console.log('Correo electrónico incorrecto')
        }

        const userRegistration = {
            fullName: name,
            email: email,
            password: password,
            phoneNumber: phone,
            address: address,
            profession: profession,
            imageUrl: image
        }
        
        console.log(userRegistration)
        const status= await CreateNewUser({user: userRegistration})
        console.log(status)
        if(status == 200) {

        }
    }




    return (

        <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType='fade' transparent={true}>
            <View style={themeComponent.modal.registerModal.backgroundView}>

                <View style={themeComponent.modal.registerModal.mainView}>

                    <Ionicons name={'close'} size={28} color={'red'} onPress={toggleModalVisibility} />
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={themeComponent.headers.header2}>Ingresa tus datos</Text>
                    </View>

                    <TextInputRegister encabezado={'Nombre completo'} anyText={name} setText={setName} />
                    <TextInputRegister encabezado={'Teléfono'} anyText={phone} setText={setPhone} />
                    <TextInputRegister encabezado={'Dirección'} anyText={address} setText={setAddress} />
                    <TextInputRegister encabezado={'Profesión/Oficio'} anyText={profession} setText={setProfession} />
                    <TextInputRegister encabezado={'Foto de perfil'} anyText={image} setText={setImage} />
                    <TextInputRegister encabezado={'Correo Electrónico'} anyText={email} setText={setEmail} />
                    <TextInputPassword encabezado={'Contraseña'} anyText={password} setText={setPassword} />

                    <Button title="Confirmar" onPress={datosIngresados} />
                </View>
            </View>
        </Modal>



    )
}
