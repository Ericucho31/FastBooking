import { Colors } from 'react-native/Libraries/NewAppScreen';
import { theme } from './theme'
import { StyleSheet } from 'react-native'

const themeComponent = StyleSheet.create({
    headers: {
        header1: {
            fontFamily: theme.fonts.primary,
            fontSize: 32,
            color: theme.colors.primary
        },
        header2: {
            fontFamily: theme.fonts.primary,
            fontSize: 24,
            color: theme.colors.primary
        },
        header3: {
            fontFamily: theme.fonts.primary,
            fontSize: 16,
            color: theme.colors.black
        }
    },

    background: {
        backgroundView: {
            flex: 1,
            backgroundColor: theme.colors.grayBackground,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }

    },

    images: {
        primary: theme.image.primary,
        thumbnail: theme.image.thumbnail,
        mini: theme.image.mini
    },

    buttons: {
        login: {
            width: '75%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 30,
            elevation: 3,
            backgroundColor: theme.colors.primary,
            marginBottom:10
        },
        signIn: {
            width: '75%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 30,
            elevation: 3,
            backgroundColor: theme.colors.white,
            marginBottom:10

        },
    },

    colors: {
        primary: theme.colors.primary,
    },

    text: {
        headerTextbox: {
            fontSize: 16,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'black'

        },

        loginText: {
            fontSize: 24,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        signInText: {
            fontSize: 24,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: theme.colors.primary,
        }

    },

    textInput: {
        container: {
            width: '75%', // Abarca el 75% del dispositivo
            alignSelf: 'center', // Para centrarlo horizontalmente
            marginBottom: 10,
        },
        textInput: {
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            fontSize: 16,
        },
    },

    views: {
        dateBookedContainer: {
            flex: 1,
            backgroundColor: theme.colors.blueBackground,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});

export default themeComponent;
