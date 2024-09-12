import React from 'react'
import type {ReactNode} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import {
    Colors,
    DebugInstructions,
    //Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import {IPlayers, IPlayerStats, Navigation} from '@interfaces/index'
import {useSelector} from 'react-redux'
import {RootState} from '@src/store/store'
import {selectPlayers} from '@src/store/selectors/selectPlayers'
import {useTheme} from 'react-native-paper'
import {Section} from '@ui/components/Section'
import TablePlayersComponent from '@ui/components/TablePlayersComponent'
//src/store/selectors/selectPlayers

const Stack = createNativeStackNavigator()

interface TeamScreenProps {
    navigation: Navigation
}

export const TeamScreen = ({navigation}: TeamScreenProps) => {
    const players: IPlayers[] = useSelector(selectPlayers)

    const theme = useTheme()
    console.log('Players====', players)

    const isDarkMode = useColorScheme() === 'dark'
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar backgroundColor={theme.colors.background} />
            {/* <Text style={{fontSize: 40, color: 'red'}}>Players</Text> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                {/* <Header /> */}
                <View
                    style={{
                        backgroundColor: isDarkMode
                            ? Colors.black
                            : Colors.white,
                    }}>
                    <Section title="Players">
                        <>
                            <TablePlayersComponent players={[...players]} />
                        </>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040507',
        alignItems: 'center',
    },
})
