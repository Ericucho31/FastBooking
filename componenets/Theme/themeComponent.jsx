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
        }
        
    },

    images: {
        primary: theme.image.primary,
        thumbnail: theme.image.thumbnail
    }
});

export default themeComponent;
