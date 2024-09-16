import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import Video, {ReactVideoSourceProperties} from 'react-native-video'
import {useWindowDimensions} from 'react-native'
import {useTheme} from 'react-native-paper'

interface IVideoPlayer {
    source: Readonly<
        Omit<ReactVideoSourceProperties, 'uri'> & {
            uri?: string | NodeRequire | undefined
        }
    >
    poster: string
}

export const VideoPlayer = ({source, poster}: IVideoPlayer) => {
    const theme = useTheme()
    const backgroundImg = require('./../images/football-field.webp')
    const {height, width} = useWindowDimensions()
    const isAlbumOrientation = height < width

    return (
        <View
            style={[
                styles.container,
                {height: height, backgroundColor: theme.colors.onBackground},
            ]}>
            <Video
                source={source}
                style={[styles.container__video]}
                controls={true}
                resizeMode={'contain'}
                paused={true}
                fullscreen={isAlbumOrientation}
                poster={poster || backgroundImg}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: (Dimensions.get('window').width * (9 / 16)) / 2,
    },

    container__video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16),
    },
})
