import {IAnnounceVideoCard} from '@src/interfaces'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {CardComponent} from '@ui/components'
import {Routes} from '@src/core/Routes'
import {View, Image} from 'react-native'
import {theme as Theme} from './../../../App'
import {useTheme} from 'react-native-paper'

export const VideoCardComponent = ({
    imageUrl,
    videoUrl,
    player,
    team,
}: IAnnounceVideoCard) => {
    const theme = useTheme<typeof Theme>()
    const navigation = useNavigation<NavigationProp<any>>()
    const onClickArticles = () =>
        navigation.navigate(Routes.VIDEO_PLAYER, {videoUrl, imageUrl})

    const reservedImageUri = Image.resolveAssetSource(
        require('@ui/images/loose.jpg'),
    ).uri
    return (
        <View style={{width: theme.deviceWidth * 0.9}}>
            <CardComponent
                title={`Goal against the team: ${team}`}
                subTitle={`Goal scorer: ${player}`}
                url={imageUrl || reservedImageUri}
                content={[] as any}
                onClickHandler={onClickArticles}
            />
        </View>
    )
}
