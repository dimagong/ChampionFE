import {Text, useColorScheme, View, StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import type {theme as Theme} from '../theme/theme'
import {useTheme} from 'react-native-paper'

type IProps = {
    children: JSX.Element
    title: string
}

export const Section = ({children, title}: IProps): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'
    const {deviceHeight, deviceWidth, colors} = useTheme<typeof Theme>()

    const styles = makeStyles(deviceHeight, deviceWidth, colors)
    return (
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle]}>{title}</Text>

            {children}
        </View>
    )
}

const makeStyles = (
    deviceHeight: number,
    deviceWidth: number,
    colors: typeof Theme.colors,
) =>
    StyleSheet.create({
        sectionContainer: {
            width: '100%',
        },
        sectionTitle: {
            paddingVertical: 15,
            paddingLeft: 10,
            backgroundColor: '#dc0714',
            color: '#fff',
            fontSize: 24,
            fontWeight: '600',
        },
    })
