import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native'

import type {RootState} from '@store/store'
import {useTheme} from 'react-native-paper'
import {ActionCreatorWithPayload} from '@reduxjs/toolkit'
import {fetchImages} from '@src/store/thunks/fetchImages'
import {fetchVideo} from '@src/store/thunks/fetchVideo'
import {theme as Theme} from '@src/ui/theme/theme'
import {convertVideoImages} from '@src/utils/videoDataConvertation'
import {VideoCardComponent} from '@src/ui/components/VideoCardComponent'

export const VideoListScreen = () => {
    const theme = useTheme<typeof Theme>()
    const video = useSelector((state: RootState) => state?.video?.value)
    const images = useSelector((state: RootState) => state?.images?.value)

    const dispatch = useDispatch<ActionCreatorWithPayload<any> | any>()

    useEffect(() => {
        dispatch(fetchVideo())
        dispatch(fetchImages())
    }, [])
    const mediaContent = convertVideoImages(video, images)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colors.onBackground}
            />
            <ScrollView>
                <View style={styles.container__view}>
                    <Text style={styles.container__title}>
                        The Best Moments
                    </Text>
                    {mediaContent.map(content => (
                        <VideoCardComponent
                            name={content.name}
                            imageUrl={content.imageUrl}
                            videoUrl={content.videoUrl}
                            player={content.player}
                            team={content.team}
                            key={content?.name}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    container__title: {
        paddingTop: 20,
        paddingBottom: 15,
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
    },
    container__carousel: {
        height: 'auto',
        paddingBottom: 25,
        paddingTop: 25,
    },
    container__view: {
        borderWidth: 1,
        borderColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
    },
})
