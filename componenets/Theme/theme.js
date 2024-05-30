import * as Font from 'expo-font'
import { useFonts } from 'expo-font'
import { Settings } from 'react-native';

export const cargarFuentes = async() => {
    await Font.loadAsync({
        'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
}

cargarFuentes();

export const theme = {
    colors: {
        primary: '#0165FC', //azul rey
        blueBackground: '#D0E3FF', //azul celeste
        grayBackground: '#f2f2f2',

        dangerRed: '#D71E3E',
        white: '#FFFFFF',
        black: '#000',
        borderGray: '#929191',
        dividerGray: 'rgba(0, 0, 0, 0.12)',
        green: '#04DA54'
    },

    fonts: {
        primary: 'Roboto'    
    },

    image: {
        primary: {
            width: 500,
            height: 500,
        },
        thumbnail: {
            width: 250,
            height: 250,
        },
        mini: {
            
            width: 70,
            height: 70,
            borderRadius:50,
        },
        micro: {
            width: 30,
            height: 30,
            borderRadius:50,
        },
        calendarDate: {
            flex: 1, // Para que ocupe todo el espacio disponible
            width: null, // Para que el ancho se ajuste automáticamente
            height: null, // Para que el alto se ajuste automáticamente
            borderRadius:50,
        },
        facebookButton: {
            width: 50,
            height: 50,
        }
,
        newDateRequest: {
            width: 70,
            height: 70,
            borderRadius:10,
        },
        Settings: {
            width: 120,
            height: 120,
            borderRadius:60,
        },
        emptySpace: {
            width: 120,
            height: 120,
            
        },

    }
}