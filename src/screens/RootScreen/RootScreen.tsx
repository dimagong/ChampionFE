import React from 'react'
import {HomeStackScreen} from '../HomeScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {ShopScreen} from '../ShopScreen'
import {UserScreen} from '../UserScreen'
import {Routes} from '@core/Routes'
import {VideoScreen} from '../VideoScreen'
import {TabBar} from '@ui/components/TabBar'
import {VideoStackScreen} from '../VideoScreen/VideoStackScreen'

const Tab = createBottomTabNavigator()

export const RootScreen = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{headerShown: false}}
                tabBar={props => <TabBar {...props} />}>
                <Tab.Screen name={Routes.HOME} component={HomeStackScreen} />
                <Tab.Screen name={Routes.VIDEO} component={VideoStackScreen} />
                {/* <Tab.Screen name={Routes.SHOP} component={ShopScreen} /> */}
                <Tab.Screen name={Routes.USER} component={UserScreen} />
            </Tab.Navigator>
        </>
    )
}
