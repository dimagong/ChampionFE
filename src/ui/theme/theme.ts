import { Dimensions } from 'react-native';
import {DefaultTheme} from 'react-native-paper';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#212121',
        primaryRed: '#d50000',
        primaryDark: '#171717',
        primaryLight: '#4d4d4d',
        secondary: `#f50057`,
        secondaryDark: '#ab003c',
        secondaryLight: '#f73378',
        alarm: '#ff1744',
        white: '#f5f5f5',
        gray: '#bdbdbd',
        accent: '#f1c40f',
        containerBack: '#ddd',
        win: '#00e676',
        draw: '#ffc400',
        warning: '#e0bc00',
    },
    deviceWidth: deviceWidth,
    deviceHeight: deviceHeight,
};