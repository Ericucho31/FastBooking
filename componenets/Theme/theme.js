import * as Font from 'expo-font'
import { useFonts } from 'expo-font'

export const cargarFuentes = async() => {
    await Font.loadAsync({
        'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
}

cargarFuentes();

export const theme = {
    colors: {
        primary: '#0165FC', //azul rey
        blueBackground: '#0165FC', //azul celeste
        grayBackground: '#F7F8FA',
        
        dangerRed: '#D71E3E',
        white: '#FFFFFF',
        black: '#000'
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
            width: 50,
            height: 50,
            borderRadius:50,
        }
    }
}