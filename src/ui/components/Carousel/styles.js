import {StyleSheet} from 'react-native';

export const carouselStyles = StyleSheet.create({
    slide__box: {
        marginRight: 20,
        backgroundColor: 'white',
        padding: 5,
        height: 80,
        minWidth: 200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 8,
    },
    slide__container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    slide__box_content: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
    },
    slide__box_score: {
        fontSize: 20,
        fontWeight: '900',
    },
    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});
