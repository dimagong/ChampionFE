import {Card, Title, MD3Theme} from 'react-native-paper'
import {StyleSheet, Text, View} from 'react-native'
import {IShopItems} from '@src/interfaces/interfaceShops'
import type {theme as Theme} from '../../theme/theme'
import {useTheme} from 'react-native-paper'
import {StarRating} from './StarRaiting'

const SizesItems = () => {
    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL']
    return (
        <View style={stylesSizes.sizes}>
            {sizes.map(size => {
                return (
                    <Text key={size} style={stylesSizes.sizes__text}>
                        {size}
                    </Text>
                )
            })}
        </View>
    )
}

const stylesSizes = StyleSheet.create({
    sizes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
    },
    sizes__text: {
        fontSize: 10,
        fontWeight: '600',
        color: '#fff',
        padding: 4,
        backgroundColor: '#9da1a2',
        borderRadius: 5,
    },
})

export const ShopDetailCardComponent = (props: IShopItems) => {
    const {name, price, url} = props
    // const theme: MD3Theme = useTheme()
    const {deviceHeight, deviceWidth, colors} = useTheme<typeof Theme>()

    const styles = makeStyles(deviceHeight, deviceWidth, colors)
    return (
        <Card style={styles.card}>
            <Card.Cover style={styles.cover} source={{uri: url}} />
            <Card.Content>
                <View style={styles.content}>
                    <View style={styles.content__sale}>
                        <Text style={styles.content__sale__text}>-20%</Text>
                    </View>
                    <Text style={styles.content__announce}>WEB & APP ONLY</Text>
                    <View style={styles.details}>
                        <SizesItems />
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.content__price}>
                        <Text style={styles.price}>&euro;{price}</Text>
                        <StarRating />
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

const makeStyles = (
    deviceHeight: number,
    deviceWidth: number,
    colors: typeof Theme.colors,
) =>
    StyleSheet.create({
        card: {
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.85,
            padding: 5,
        },
        cover: {
            height: deviceHeight * 0.6,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 5,
            height: deviceHeight * 0.25,
            padding: 10,
        },
        content__sale: {
            width: 60,
            height: 30,
            backgroundColor: '#b90100',
            borderRadius: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        content__sale__text: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
        },
        content__announce: {
            fontSize: 16,
            fontWeight: '600',
            color: '#b90100',
        },
        content__price: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            // borderColor: 'red',
            // borderWidth: 1,
        },
        details: {
            paddingTop: 10,
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // width: '100%',
            // borderColor: 'red',
            // borderWidth: 1,
        },
        name: {
            // paddingTop: 10,
            fontSize: 16,
            // lineHeight: 16,
            fontWeight: '600',
        },
        price: {
            fontSize: 20,
            fontWeight: '600',
            color: '#384750',
        },
    })
