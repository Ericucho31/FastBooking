import { useState } from "react"
import { FIREBASE_APP, FIREBASE_AUTH } from "../../FirebaseConfig";
import { ActivityIndicator, Button, TextInput, View, Text } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import TextInputSimple from "../TextBox/TextInputSimple";
import themeComponent from "../Theme/themeComponent";
import LoginButton from "../Buttons/LoginButton";
import SignInButton from "../Buttons/SignInButton";

export default function LoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const logIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response);
            alert('Checa tus mails')
        }
        catch (error) {
            console.log(error)
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
            alert('Checa tus mails')
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View>
            <View style={themeComponent.textInput.container}>
                <Text style={themeComponent.text.headerTextbox}>Correo Electrónico</Text>
                <TextInput style={themeComponent.textInput.textInput} value={email} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={themeComponent.textInput.container}>
                <Text style={themeComponent.text.headerTextbox}>Correo Electrónico</Text>
                <TextInput style={themeComponent.textInput.textInput} value={password} secureTextEntry={true} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />
            </View>

            {loading ? <ActivityIndicator size="large" color="#00ff00" />
                : <View style={{ width: '100%' }}>
                    <LoginButton onPress={logIn} text={'Iniciar Sesión'} />
                    <SignInButton onPress={signUp} text={'Registrarse'} />
                </View>

            }
        </View>
    )

}