import {DataTable, MD3Theme, Text, useTheme} from 'react-native-paper'
import {IPlayers, IPlayerStats, ITeamStatistics} from '@src/interfaces'
import {StyleSheet} from 'react-native'
import {MD3Colors} from 'react-native-paper/lib/typescript/types'
import type {theme as Theme} from '@ui/theme/theme'

interface ITablePlayersComponent {
    players: IPlayers[]
}

const TablePlayersComponent = ({players}: ITablePlayersComponent) => {
    const theme: typeof Theme = useTheme()

    const styles = makeStyles(theme.colors)

    players.sort((a, b) => b.stats.goals - a.stats.goals)

    return (
        <DataTable
            style={{
                width: theme.deviceWidth,
                paddingRight: 40,
            }}>
            <DataTable.Header>
                <DataTable.Title style={styles.cellWidth}>
                    <Text style={styles.title}> Name</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={[styles.title]}>Goals</Text>
                </DataTable.Title>
                <DataTable.Title numeric style={styles.cellMinWidth}>
                    <Text style={styles.title}>Matches</Text>
                </DataTable.Title>

                <DataTable.Title numeric>
                    <Text style={[styles.titlePoints, styles.red]}> R</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={[styles.titlePoints, styles.yellow]}> Y</Text>
                </DataTable.Title>
            </DataTable.Header>

            {players.map((team, idx) => (
                <DataTable.Row key={team._id}>
                    <DataTable.Cell style={[styles.cellWidth]}>
                        <Text style={styles.textCell}>{team.name}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>{team.stats.goals}</DataTable.Cell>
                    <DataTable.Cell numeric style={styles.cellMinWidth}>
                        <Text>{team.stats.match_appearances}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.stats.red_cards}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.stats.yellow_cards}
                    </DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    )
}

export default TablePlayersComponent

const makeStyles = (colors: typeof Theme.colors) =>
    StyleSheet.create({
        cellMinWidth: {
            minWidth: 25,
        },
        cellWidth: {
            minWidth: 70,
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
            fontSize: 13,
        },
        red: {
            color: colors.alarm,
        },
        yellow: {
            color: colors.warning,
        },
    })
