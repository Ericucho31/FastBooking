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
            fontWeight: 'bold',
            color: theme.colors.primary
        }
    },

    background: {
        backgroundView: {
            backgroundColor: theme.colors.grayBackground,
            alignItems: 'center',
            justifyContent: 'center',
            height:'100%',
        },

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
            marginBottom: 10
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
            marginBottom: 10
        },
        firstTime: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            elevation: 3,
            backgroundColor: theme.colors.primary,
        },
        timehour: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: theme.colors.white,
            flexDirection:'row',
            paddingHorizontal:5
        },
        accept: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: theme.colors.primary,
            flexDirection:'row',
            paddingHorizontal:5
        },
        decline: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: theme.colors.dangerRed,
            flexDirection:'row',
            paddingHorizontal:5

        }

    },

    card: {
        dateBookedContainer: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            position: 'relative', 
            width:'90%',
            maxWidth: '90%',
            height:'100%',
            backgroundColor: theme.colors.blueBackground, 
            padding:5,
            borderRadius: 10,
        },
        imageContainer:{
            margin: 5,
            position: 'relative'
        },

        textContainer: {
            
            maxWidth:'80%',
            paddingHorizontal:5,

            //backgroundColor: 'white'
        }
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
        },
        firstTime: {
            fontSize: 12,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        timehour: {
            fontSize: 12,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: theme.colors.primary,
        },
        acceptDecline: {
            fontSize: 20,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
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

    }
});

export default themeComponent;
