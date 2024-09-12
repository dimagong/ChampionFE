import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';
import {theme} from './../../../../App';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IMatch} from '~/interfaces';
import {carouselStyles} from './styles.js';

interface ICarouselProps {
    lastMatches: IMatch[];
}
interface ISlideProps {
    data: IMatch;
}

const Slide = ({data}: ISlideProps) => {
    const navigation = useNavigation<any>();
    const {deviceHeight, deviceWidth, colors} = useTheme<typeof theme>();
    const teamHome =
        data.homeaway === 'home' ? `Liptovská Štiavnica` : data.team.name;
    const teamGuest =
        data.homeaway === 'home' ? data.team.name : `Liptovská Štiavnica`;

    const iconAvatar: string =
        data.result === 'W'
            ? 'human-handsup'
            : data.result === 'L'
            ? 'human-handsdown'
            : 'handshake';
    return (
        <View style={[carouselStyles.slide__box, carouselStyles.shadowProp]}>
            <View>
                <Avatar.Icon size={40} icon={iconAvatar} />
            </View>
            <View style={[carouselStyles.slide__container]}>
                <Text style={[carouselStyles.slide__box_content]}>
                    {teamHome}
                </Text>
                <Text
                    style={[
                        carouselStyles.slide__box_content,
                        carouselStyles.slide__box_score,
                        {color: colors.alarm},
                    ]}>
                    {data.score}
                </Text>
                <Text style={[carouselStyles.slide__box_content]}>
                    {teamGuest}
                </Text>
            </View>
        </View>
    );
};

export const Carousel = ({lastMatches}: ICarouselProps) => {
    return (
        <FlatList
            data={lastMatches}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => {
                return <Slide data={item} />;
            }}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        />
    );
};
