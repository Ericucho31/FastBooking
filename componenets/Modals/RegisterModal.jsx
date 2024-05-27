import React, { useState } from "react";
import { View, Modal, Text, Button } from "react-native";
import themeComponent from "../Theme/themeComponent";
import Ionicons from '@expo/vector-icons/Ionicons';
import TextInputRegister from "../TextBox/TextInputRegister";
import TextInputPassword from "../TextBox/TextInputPassword";
import { CreateNewUser } from "../Handler/API/APIHandler";

export default function RegisterModal({ isVisible, toggleModalVisibility, confirmacion, setConfirmacion }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [phoneError, setphoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [professionError, setProfessionError] = useState('');
    const [imageError, setImageError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [requiredField, setRequiredField] = useState('*Obligatorio');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const verificacionDatos = () => {
        let valid = true;

        if (name == '') {
            setNameError(requiredField);
            valid = false;
        } else {
            setNameError(null);
        }

        if (phone == '') {
            setphoneError(requiredField);
            valid = false;
        } else {
            setphoneError(null);
        }

        if (address == '') {
            setAddressError(requiredField);
            valid = false;
        } else {
            setAddressError(null);
        }

        if (profession == '') {
            setProfessionError(requiredField);
            valid = false;
        } else {
            setProfessionError(null);
        }

        if (image == '') {
            setImageError(requiredField);
            valid = false;
        } else {
            setImageError(null);
        }

        if (!validateEmail(email)) {
            setEmailError('*Correo electrónico incorrecto');
            valid = false;
        } else {
            setEmailError(null);
        }

        if (password == '') {
            setPasswordError(requiredField);
            valid = false;
        } else {
            setPasswordError(null);
        }

        if (valid) {
            console.log('correcto');
        } else {
            console.log('incorrecto');
        }

        return valid;
    }


    const datosIngresados = async () => {
        const status = verificacionDatos()
        if (status == true) {
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
            const status = await CreateNewUser({ user: userRegistration })
            console.log(status)
            if (status == '200') {
                console.log('El usuario' + {name} + 'se ha registrado de manera exitosa')
                toggleModalVisibility()
            }
        }

    }


    return (

        <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} animationType='slide' transparent={true}>
            <View style={themeComponent.modal.registerModal.backgroundView}>

                <View style={themeComponent.modal.registerModal.mainView}>

                    <Ionicons name={'close'} size={28} color={'red'} onPress={toggleModalVisibility} />
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={themeComponent.headers.header2}>Ingresa tus datos</Text>
                    </View>

                    <TextInputRegister encabezado={'Nombre completo'} anyText={name} setText={setName} errorMessage={nameError} />
                    <TextInputRegister encabezado={'Teléfono'} anyText={phone} setText={setPhone} errorMessage={phoneError} />
                    <TextInputRegister encabezado={'Dirección'} anyText={address} setText={setAddress} errorMessage={addressError}/>
                    <TextInputRegister encabezado={'Profesión/Oficio'} anyText={profession} setText={setProfession} errorMessage={professionError} />
                    <TextInputRegister encabezado={'Foto de perfil'} anyText={image} setText={setImage} errorMessage={imageError}/>
                    <TextInputRegister encabezado={'Correo Electrónico'} anyText={email} setText={setEmail} errorMessage={emailError} />
                    <TextInputPassword encabezado={'Contraseña'} anyText={password} setText={setPassword} errorMessage={passwordError}/>

                    <Button title="Confirmar" onPress={datosIngresados} />
                </View>
            </View>
        </Modal>



    )
}
