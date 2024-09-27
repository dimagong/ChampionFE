import React from 'react'
import {Navigation} from '@src/interfaces'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import {View, TouchableOpacity} from 'react-native'
import {Routes} from '@core/Routes'

export const HeaderLeftIcon = ({navigation}: {navigation: Navigation}) => (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.STATS)}>
        <View>
            <MaterialIcon name="calendar-today" size={25} color="white" />
        </View>
    </TouchableOpacity>
)
