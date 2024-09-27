import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LogoTitle} from '@ui/components'
import {VideoScreen} from './VideoScreen'
import {useTheme} from 'react-native-paper'
import {Routes} from '@core/Routes'
import {VideoListScreen} from './VideoListScreen'

const VideoStack = createNativeStackNavigator()

export const VideoStackScreen = () => {
    const theme = useTheme()
    return (
        <>
            <VideoStack.Navigator
                initialRouteName={Routes.VIDEO_LIST}
                screenOptions={{
                    headerTitle: props => <LogoTitle />,
                    headerTitleAlign: 'center',
                }}>
                <VideoStack.Screen
                    name={Routes.VIDEO_LIST}
                    component={VideoListScreen}
                    options={{
                        title: 'Video',
                        headerStyle: {
                            backgroundColor: theme.colors.onBackground,
                        },
                        headerTintColor: theme.colors.onPrimary,
                    }}
                />
                <VideoStack.Screen
                    name={Routes.VIDEO_PLAYER}
                    component={VideoScreen}
                    options={{
                        title: 'VideoPlayer',
                        headerStyle: {
                            backgroundColor: theme.colors.onBackground,
                        },
                        headerTintColor: theme.colors.onPrimary,
                    }}
                />
            </VideoStack.Navigator>
        </>
    )
}
