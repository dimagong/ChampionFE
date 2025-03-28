import React from 'react'
import {
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    useColorScheme,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Navigation} from '@interfaces/index'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Section} from '@src/ui/components/Section'
import {useDispatch, useSelector} from 'react-redux'
import {ActionCreatorWithPayload} from '@reduxjs/toolkit'
import {fetchShopItems} from '@src/store/thunks/fetchShopItems'
import {RootState} from '@src/store/store'
import {IShopItems} from '@src/interfaces/interfaceShops'
import {ShopCardComponent} from '@src/ui/components/Shop/ShopCardComponent'
import {Divider} from 'react-native-paper'
import {
    NavigationProp,
    ParamListBase,
    useNavigation,
} from '@react-navigation/native'
import {Routes} from '@src/core/Routes'

interface ShopScreenProps {
    navigation: Navigation
}

export const ShopScreen = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const dispatch = useDispatch<ActionCreatorWithPayload<any> | any>()

    const shopItems: IShopItems[] = useSelector(
        (state: RootState) => state?.shopItems?.shopItems,
    )

    const navigation = useNavigation<NavigationProp<ParamListBase>>()
    const onClickShopCard = (name: string, price: string, url: string) => {
        navigation.navigate(Routes.SHOP_DETAIL, {name, price, url})
    }

    React.useEffect(() => {
        dispatch(fetchShopItems())
    }, [])

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* {/* <StatusBar backgroundColor="#040507" /> */}
            {/* <Text style={{fontSize: 40, color: 'white'}}>Shop screen</Text>  */}
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
                    <Text
                        style={{
                            color: Colors.white,
                            backgroundColor: '#dc0714',
                            paddingTop: 15,
                            paddingBottom: 15,
                            paddingLeft: 10,
                            fontSize: 20,
                        }}>
                        Official Liverpool FC Store
                    </Text>

                    <Divider style={{marginBottom: 25}} />
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 25,
                        }}>
                        {shopItems.map((item: IShopItems) => {
                            return (
                                <ShopCardComponent
                                    key={item.name}
                                    name={item.name}
                                    price={item.price}
                                    url={item.url}
                                    onClickHandler={onClickShopCard}
                                />
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040507',
    },
})
