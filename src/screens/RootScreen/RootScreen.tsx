import React from 'react';
import {HomeStackScreen} from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ShopScreen} from '../ShopScreen';
// import {TabBar} from 'ui/components';
import {UserScreen} from '../UserScreen';
import {Routes} from '@src/core/Routes';
import {VideoScreen} from '../VideoScreen';
import {TabBar} from '@src/ui/components/TabBar';

const Tab = createBottomTabNavigator();

export const RootScreen = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{headerShown: false}}
                tabBar={props => <TabBar {...props} />}>
                <Tab.Screen name={Routes.HOME} component={HomeStackScreen} />
                <Tab.Screen name={Routes.VIDEO} component={VideoScreen} />
                {/* <Tab.Screen name={Routes.SHOP} component={ShopScreen} /> */}
                <Tab.Screen name={Routes.USER} component={UserScreen} />
            </Tab.Navigator>
        </>
    );
};
