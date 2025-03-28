import {Card, Title, MD3Theme} from 'react-native-paper'
import {StyleSheet, View} from 'react-native'
import {IShopCardComponent} from '@src/interfaces/interfaceShops'
import type {theme as Theme} from '../../theme/theme'
import {useTheme} from 'react-native-paper'
export const ShopCardComponent = (props: IShopCardComponent) => {
    const {name, price, url, onClickHandler} = props
    // const theme: MD3Theme = useTheme()
    const {deviceHeight, deviceWidth, colors} = useTheme<typeof Theme>()

    const styles = makeStyles(deviceHeight, deviceWidth, colors)
    return (
        <Card
            onPress={() => onClickHandler(name, price, url)}
            style={styles.card}>
            <Card.Cover style={styles.cover} source={{uri: url}} />
            <Card.Content>
                <View style={styles.content}>
                    <Title style={styles.contentTitle}>{name}</Title>
                    <Title style={styles.subTitle}>&euro;{price} </Title>
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
            width: deviceWidth / 2.5,
        },
        cover: {
            // padding: 5,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: 90,
        },
        contentTitle: {
            paddingTop: 10,
            fontSize: 14,
            lineHeight: 16,
            fontWeight: '600',
        },
        subTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: '#b90100',
        },
    })
