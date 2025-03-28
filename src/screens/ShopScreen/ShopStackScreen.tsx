import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LogoTitle} from '@ui/components'

import {useTheme} from 'react-native-paper'
import {Routes} from '@core/Routes'
import {ShopScreen} from './ShopScreen'
import {ShopScreenDetail} from './ShopScreenDetail'

const ShopStack = createNativeStackNavigator()

export const ShopStackScreen = () => {
    const theme = useTheme()

    return (
        <>
            <ShopStack.Navigator
                initialRouteName={Routes.SHOP}
                screenOptions={{
                    headerTitle: props => <LogoTitle />,
                    headerTitleAlign: 'center',
                }}>
                <ShopStack.Screen
                    name={Routes.SHOP}
                    component={ShopScreen}
                    options={{
                        title: 'Shop',
                        headerStyle: {
                            backgroundColor: theme.colors.onBackground,
                        },
                        headerTintColor: theme.colors.onPrimary,
                    }}
                />
                <ShopStack.Screen
                    name={Routes.SHOP_DETAIL}
                    component={ShopScreenDetail}
                    options={{
                        title: 'ShopScreenItem',
                        headerStyle: {
                            backgroundColor: theme.colors.onBackground,
                        },
                        headerTintColor: theme.colors.onPrimary,
                    }}
                />
            </ShopStack.Navigator>
        </>
    )
}
