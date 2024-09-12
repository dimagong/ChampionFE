import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/store'
import {ActionCreatorWithPayload, AsyncThunkAction} from '@reduxjs/toolkit'
import {ITeamsStatistics, ITeamStatistics} from '@interfaces/index'
import {Section} from '@ui/components/Section'
import TableComponent from '@ui/components/TableComponent'

type IProps = {
    children: JSX.Element
    title: string
}

const Stack = createNativeStackNavigator()

export const StatsScreen = ({navigation}: {navigation: any}) => {
    const statistics = useSelector(
        (state: RootState) => state.statistics.value?.results ?? [],
    ) as any[]

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    const teamsStatistics: ITeamsStatistics = statistics?.map(stat => {
        return {
            team: stat?.team?.name,
            matches: stat?.stats?.matches.played,
            draw: stat?.stats?.matches.draw,
            lost: stat?.stats?.matches.lost,
            won: stat?.stats?.matches.won,
            points: stat?.stats?.points,
            id: stat?.team?._id,
        } as ITeamStatistics
    })

    return (
        <SafeAreaView style={backgroundStyle}>
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
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
                    <Section title="Match statistics">
                        <>
                            <TableComponent teamsStatistics={teamsStatistics} />
                        </>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
