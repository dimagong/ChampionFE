import {DataTable, MD3Theme, Text, useTheme} from 'react-native-paper'
import {IPlayers, IPlayerStats, ITeamStatistics} from '@src/interfaces'
import {Image, StyleSheet, View} from 'react-native'
import {MD3Colors} from 'react-native-paper/lib/typescript/types'
import type {theme as Theme} from '@ui/theme/theme'
import {Avatar} from 'react-native-paper'
import images from '../images/players'
interface ITablePlayersComponent {
    players: IPlayers[]
}

const makeColor = (position: string, colors: typeof Theme.colors) => {
    switch (position) {
        case 'FORWARD':
            return colors.error
        case 'MIDFIELDER':
            return colors.alarm
        case 'DEFENDER':
            return colors.accent
        case 'GOALKEEPER':
            return colors.secondary
        default:
            return colors.primary
    }
}

const adjustImageName = (name: string) => {
    return name
        .replace(/^_+|_+$/g, '')
        .replace(/ /g, '')
        .replace('-', '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

const TablePlayersComponent = ({players}: ITablePlayersComponent) => {
    const theme: typeof Theme = useTheme()

    const styles = makeStyles(theme.colors)

    players
        .sort((a, b) => b.appearances - a.appearances)
        .sort((a, b) => b.goals - a.goals)

    return (
        <DataTable
            style={{
                width: theme.deviceWidth,
            }}>
            <DataTable.Header>
                <DataTable.Title style={styles.cellWidth}>
                    <Text style={styles.title}> Name</Text>
                </DataTable.Title>
                <DataTable.Title numeric style={styles.cellMinWidth}>
                    <Text style={styles.title}>Position</Text>
                </DataTable.Title>
                <DataTable.Title numeric style={styles.cellMinWidth}>
                    <Text style={[styles.title]}>Goals</Text>
                </DataTable.Title>
                <DataTable.Title numeric style={styles.cellMinWidth}>
                    <Text style={styles.title}>Matches</Text>
                </DataTable.Title>
            </DataTable.Header>

            {players.map(player => {
                return (
                    <DataTable.Row key={player.name}>
                        <DataTable.Cell style={[styles.cellWidth]}>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 2,
                                }}>
                                <Avatar.Image
                                    size={30}
                                    source={
                                        images[adjustImageName(player.name)] ||
                                        images['photoMissing']
                                    }
                                />
                                <Text style={styles.textCell}>
                                    {player.name}
                                </Text>
                            </View>
                        </DataTable.Cell>
                        <DataTable.Cell numeric style={[styles.cellWidth]}>
                            <View
                                style={
                                    (styles.textCellSmallBox,
                                    {
                                        backgroundColor: makeColor(
                                            player.position,
                                            theme.colors,
                                        ),
                                        padding: 2,
                                        borderRadius: 4,
                                        // borderWidth: 1,
                                        width: 70,
                                        alignItems: 'center',
                                    })
                                }>
                                <Text style={styles.textCellSmall}>
                                    {player.position.toLowerCase()}
                                </Text>
                            </View>
                        </DataTable.Cell>
                        <DataTable.Cell numeric style={styles.cellMinWidth}>
                            {player.goals}
                        </DataTable.Cell>
                        <DataTable.Cell numeric style={styles.cellMinWidth}>
                            <Text>{player.appearances}</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                )
            })}
        </DataTable>
    )
}

export default TablePlayersComponent

const makeStyles = (colors: typeof Theme.colors) =>
    StyleSheet.create({
        cellMinWidth: {
            minWidth: 35,
        },
        cellWidth: {
            minWidth: 65,
        },
        title: {
            fontWeight: '700',
            color: 'black',
            fontSize: 14,
        },
        titlePoints: {
            fontWeight: '700',
            fontSize: 14,
        },
        textCell: {
            width: 70,
            fontSize: 12,
        },
        textCellSmall: {
            fontSize: 12,
            color: colors.white,
        },
        textCellSmallBox: {
            // width: 30,
        },
        red: {
            color: colors.alarm,
        },
        yellow: {
            color: colors.warning,
        },
    })
