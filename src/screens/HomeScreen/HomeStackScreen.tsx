import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HeaderLeftIcon, HeaderRightIcon, LogoTitle} from '@ui/components'
import {StatsScreen} from '../StatsScreen'
import {ArticlesScreen} from '../ArticlesScreen'
import {TeamScreen} from '../TeamScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Navigation} from '@interfaces/index'
import {HomeScreen} from './HomeScreen'
import {Routes} from '@core/Routes'

const Tab = createBottomTabNavigator()

const HomeStack = createNativeStackNavigator()

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName={Routes.MAIN}
            screenOptions={{
                headerTitle: props => <LogoTitle />,
                headerTitleAlign: 'center',
            }}>
            <HomeStack.Screen
                name={Routes.MAIN}
                component={HomeScreen}
                options={({navigation}: {navigation: Navigation}) => ({
                    headerRight: props => (
                        <HeaderRightIcon navigation={navigation} />
                    ),
                    headerLeft: props => (
                        <HeaderLeftIcon navigation={navigation} />
                    ),
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                })}
            />
            <HomeStack.Screen
                name={Routes.STATS}
                component={StatsScreen}
                options={{
                    title: 'Stats',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#ffffff',
                }}
            />
            <HomeStack.Screen
                name={Routes.TEAM}
                component={TeamScreen}
                options={{
                    title: 'Team',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#ffffff',
                }}
            />
            <HomeStack.Screen
                name={Routes.ARTICLES}
                component={ArticlesScreen}
                options={{
                    title: 'Articles',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#ffffff',
                }}
            />
        </HomeStack.Navigator>
    )
}
