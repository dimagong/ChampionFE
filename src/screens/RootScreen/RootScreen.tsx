import React from 'react'
import {HomeStackScreen} from '../HomeScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {UserScreen} from '../UserScreen'
import {Routes} from '@core/Routes'
import {TabBar} from '@ui/components/TabBar'
import {VideoStackScreen} from '../VideoScreen/VideoStackScreen'
import {ShopStackScreen} from '../ShopScreen/ShopStackScreen'
import {TicketsScreen} from '../TicketsScreen'

const Tab = createBottomTabNavigator()

export const RootScreen = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{headerShown: false}}
                tabBar={props => <TabBar {...props} />}>
                <Tab.Screen name={Routes.HOME} component={HomeStackScreen} />
                <Tab.Screen name={Routes.VIDEO} component={VideoStackScreen} />
                <Tab.Screen name={Routes.SHOP} component={ShopStackScreen} />
                <Tab.Screen name={Routes.TICKETS} component={TicketsScreen} />
                {/* <Tab.Screen name={Routes.USER} component={UserScreen} /> */}
            </Tab.Navigator>
        </>
    )
}
