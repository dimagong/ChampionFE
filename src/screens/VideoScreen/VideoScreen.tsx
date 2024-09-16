import React from 'react'
import {useColorScheme} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {VideoPlayer} from '@ui/components/VideoPlayer'
import {useTheme} from 'react-native-paper'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Navigation} from '@src/interfaces'

interface ShopScreenProps {
    route: any
}

export const VideoScreen = ({route}: ShopScreenProps) => {
    const theme = useTheme()

    const isDarkMode = useColorScheme() === 'dark'
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    const {videoUrl, imageUrl} = route.params
    return (
        <SafeAreaView style={backgroundStyle}>
            <VideoPlayer
                source={{
                    uri: videoUrl,
                }}
                poster={imageUrl}
            />
        </SafeAreaView>
    )
}
