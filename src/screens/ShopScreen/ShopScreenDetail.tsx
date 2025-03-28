import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native'
import {ShopCardComponent} from '@src/ui/components/Shop/ShopCardComponent'
import {ShopDetailCardComponent} from '@src/ui/components/Shop/ShopDetailCardComponent'
import {StyleSheet, View} from 'react-native'
import {Text} from 'react-native-paper'

type ShopScreenDetailRouteProp = {
    name: string
    price: string
    url: string
}
//{route}: ShopScreenProps
export const ShopScreenDetail = () => {
    const {params} = useRoute<RouteProp<ParamListBase>>()
    console.log('params=======', params)
    const {name, price, url} = params as ShopScreenDetailRouteProp
    return (
        <View style={styles.container}>
            <ShopDetailCardComponent name={name} price={price} url={url} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
