import { useState } from "react"
import { FIREBASE_APP, FIREBASE_AUTH } from "../../FirebaseConfig";
import { ActivityIndicator, Button, TextInput, View, Text } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { LoginUser } from "../Handler/API/APIHandler";
import themeComponent from "../Theme/themeComponent";
import LoginButton from "../Buttons/LoginButton";
import SignInButton from "../Buttons/SignInButton";
import RegisterModal from "../Modals/RegisterModal";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDataContext } from "../Context/GlobalStateContext";

export default function LoginComponent({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [isVisible, setIsVIsible] = useState(false);

    const { state, dispatch } = useDataContext();

    const auth = FIREBASE_AUTH;

    const logIn = async () => {
        setLoading(true);
        const user = { email: email, password: password }
        try {
            const token = await LoginUser({ user: user })
            await AsyncStorage.setItem('jwtToken', token);

            const tokenGuardado = await AsyncStorage.getItem('jwtToken');
            dispatch({ type: 'SET_USER_TOKEN', payload: tokenGuardado });

            return token;
        }
        catch (error) {
            console.log(error)
            setError('El correo o contraseña ingresados son incorrectos')
        }
        finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    const toggleVisibility = () => {
        setIsVIsible(!isVisible)
    }

    return (
        <View style={{ width: '90%', }}>
            {error && (
                <Text style={themeComponent.text.cancelar}>{error}</Text>
            )}

            <View style={themeComponent.textInput.container}>
                <Text style={themeComponent.text.headerTextbox}>Correo Electrónico</Text>
                <TextInput style={themeComponent.textInput.textInput} value={email} placeholder="Ejemplo@ejemplo.com" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={themeComponent.textInput.container}>
                <Text style={themeComponent.text.headerTextbox}>Contraseña</Text>
                <TextInput style={themeComponent.textInput.textInput} value={password} secureTextEntry={true} placeholder="******" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />
            </View>

            {loading ? <ActivityIndicator size="large" color="#00ff00" />
                : <View style={{ width: '100%', alignItems: 'center' }}>
                    <LoginButton onPress={logIn} text={'Iniciar Sesión'} />
                    <SignInButton onPress={toggleVisibility} text={'Registrarse'} />
                    <RegisterModal isVisible={isVisible} toggleModalVisibility={toggleVisibility} />
                </View>

            }
        </View>
    )

}