import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/store/store'
import {Provider as ReduxProvider} from 'react-redux'

import {Provider as PaperProvider} from 'react-native-paper'
import {RootScreen} from './src/screens'
import {theme} from '@ui/theme/theme'

const App = () => {
    return (
        <ReduxProvider store={store}>
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <RootScreen />
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    )
}

export default App
