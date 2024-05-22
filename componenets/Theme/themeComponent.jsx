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
            height: '100%',
        },
        modalView: {
            backgroundColor: theme.colors.grayBackground,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
    },

    images: {
        primary: theme.image.primary,
        thumbnail: theme.image.thumbnail,
        facebookButton: theme.image.facebookButton,
        mini: theme.image.mini,
        micro: theme.image.micro,
        calendarDate: theme.image.calendarDate,
        newDateRequest: theme.image.newDateRequest,
        settings: theme.image.Settings,
    },

    buttons: {
        login: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 30,
            elevation: 3,
            backgroundColor: theme.colors.primary,
            marginBottom: 10,
            flexDirection: 'row',
        },
        facebookLogin: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 0,
            borderRadius: 30,
            elevation: 3,
            backgroundColor: theme.colors.primary,
            marginBottom: 10,
            flexDirection: 'row',
        },
        signIn: {
            width: '90%',
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
            flexDirection: 'row',
            paddingHorizontal: 5
        },
        accept: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
            flexDirection: 'row',
            paddingHorizontal: 5,
            marginRight: 5,
        },
        decline: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: theme.colors.dangerRed,
            flexDirection: 'row',
            paddingHorizontal: 5,
            marginRight: 5,
        },
        selectDate: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 12,
            borderRadius: 30,
            borderColor: theme.colors.primary,
            borderWidth: 1,
            backgroundColor: theme.colors.white,
            flexDirection: 'row',
        },


    },

    card: {
        dateBookedContainer: {
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            position: 'relative',
            width: '90%',
            maxWidth: '90%',
            backgroundColor: theme.colors.blueBackground,
            //padding: 5,
            borderRadius: 10,
            marginBottom: 15,
        },
        imageContainer: {
            flex: 1,
            position: 'relative',
            //backgroundColor:'blue',
        },

        textContainer: {
            flex: 3,
            maxWidth: '90%',
            marginBottom: 5,
            //backgroundColor: 'white'
        },

        calendarDate: {
            dateBookedContainer: {
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                width: '90%',
                minHeight: 75, //indica la altura mínima del contenedor, sin importar lo que tenga adentro
                maxWidth: '90%',
                backgroundColor: theme.colors.white,
                //padding: 5,
                borderRadius: 10,
                marginBottom: 15,
            },
            imageContainer: {
                flex: 1, // Para que ocupe todo el espacio disponible
                width: null, // Para que el ancho se ajuste automáticamente
                height: null, // Para que el alto se ajuste automáticamente
                backgroundColor: theme.colors.grayBackground,

                borderBottomRightRadius: 50,
                borderTopRightRadius: 50,
            },

            textContainer: {
                flex: 2,
                maxWidth: '65%',
                paddingHorizontal: 5,
                marginBottom: 5,


                //backgroundColor: 'white'
            },
        },
        calendarDate2: {
            mainContainer: {
                alignItems: 'flex-start',
                //justifyContent: 'space-evenly',
                height:150,
                width: '90%',
                //minHeight: 200, //indica la altura mínima del contenedor, sin importar lo que tenga adentro
                maxWidth: '90%',
                backgroundColor: theme.colors.white,
                padding: 10,
                borderRadius: 10,
                marginBottom: 15,

                /*shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, */ // Esto es necesario para que la sombra se muestre en dispositivos Android
            },
        },
        newDateRequest: {
            mainContainer: {
                alignItems: 'flex-start',
                //justifyContent: 'space-evenly',
                width: '100%',
                minHeight: 75, //indica la altura mínima del contenedor, sin importar lo que tenga adentro
                maxWidth: '100%',
                backgroundColor: theme.colors.white,
                padding: 10,
                borderRadius: 10,
                marginBottom: 15,

                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // Esto es necesario para que la sombra se muestre en dispositivos Android
            },
            aceptarCita: {
                flex: 1,
                display:'flex', 
                position:'absolute',
                height: '115%', 
                width: '105.5%', 
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: theme.colors.green,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // Esto es necesario para que la sombra se muestre en dispositivos Android
            }
        },
        notification: {
            mainContainer: {
                //flex:1,
                alignItems: 'flex-start',
                //justifyContent: 'space-evenly',
                flexDirection: 'row',
                width: '90%',
                minHeight: 75, //indica la altura mínima del contenedor, sin importar lo que tenga adentro
                maxWidth: '90%',
                backgroundColor: theme.colors.white,
                padding: 10,
                borderRadius: 10,
                marginBottom: 15,

                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5, // Esto es necesario para que la sombra se muestre en dispositivos Android


            }

        },
        confirmation: {

            width: '90%',
            minHeight: 75, //indica la altura mínima del contenedor, sin importar lo que tenga adentro
            maxWidth: '90%',
            backgroundColor: theme.colors.white,
            padding: 8,
            borderRadius: 10,
        },

        settings: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            borderColor: theme.colors.dividerGray,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1, // Ancho del borde inferior
        }


    },

    colors: {
        primary: theme.colors.primary,
        white: theme.colors.white,
        borderGray: theme.colors.borderGray,
        grayBackground: theme.colors.grayBackground,
        dangerRed: theme.colors.dangerRed,
        green: theme.colors.green,
    },

    scrollables: {
        months: {
            selected: {
                alignItems: 'center',
                backgroundColor: theme.colors.primary,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 30
            },
            unselected: {
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 30
            },
        },

        days: {
            selected: {
                alignItems: 'center',
                backgroundColor: theme.colors.primary,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10
            },
            unselected: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                borderColor: '#929191',
                borderWidth: 1,
                width: 40,
                height: 40,
            },
        },

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
        loginFacebook: {
            fontSize: 18,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
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
        },
        months: {
            selected: {
                fontSize: 16,
                fontFamily: theme.fonts.primary,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: theme.colors.white,
            },
            unselected: {
                fontSize: 16,
                fontFamily: theme.fonts.primary,
                fontWeight: 'regular',
                letterSpacing: 0.25,
                color: 'black',
            }
        },
        selectDate: {
            fontSize: 16,
            fontFamily: theme.fonts.primary,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: theme.colors.primary,
        },

        days: {
            selected: {
                fontSize: 16,
                fontFamily: theme.fonts.primary,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: theme.colors.white,
            },
            unselected: {
                fontSize: 16,
                fontFamily: theme.fonts.primary,
                fontWeight: 'regular',
                letterSpacing: 0.25,
                color: 'black',
            }
        },

        cancelar: {
            fontFamily: theme.fonts.primary,
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.dangerRed
        },
        logOut: {
            fontFamily: theme.fonts.primary,
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.borderGray,
        }

    },

    textInput: {
        container: {
            width: '100%',
            alignItems: 'center',
            marginBottom: 10,
        },
        textInput: {
            width: '90%',
            backgroundColor: theme.colors.white,
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
