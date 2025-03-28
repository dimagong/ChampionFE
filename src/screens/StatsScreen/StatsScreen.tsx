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
import {ITeamStatistics} from '@interfaces/index'
import {Section} from '@ui/components/Section'
import TableComponent from '@ui/components/TableComponent'

type IProps = {
    children: JSX.Element
    title: string
}

const Stack = createNativeStackNavigator()

export const StatsScreen = ({navigation}: {navigation: any}) => {
    const statistics = useSelector(
        (state: RootState) => state.statistics.results ?? [],
    ) as any[]

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
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
                            <TableComponent teamsStatistics={statistics} />
                        </>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
