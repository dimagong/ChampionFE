import {DataTable, MD3Theme, Text, useTheme} from 'react-native-paper'
// import {ITeamsStatistics} from 'src/interfaces';
import {StyleSheet} from 'react-native'
import type {theme as Theme} from './../theme/theme'
import {TEAM_IDX} from '@env'
import {ITeamStatistics} from '@src/interfaces'

interface ITableComponent {
    //teamsStatistics: ITeamsStatistics;
    teamsStatistics: ITeamStatistics[]
}

const makeShortName = (name: string) => {
    let nameParts = name.split(' ')
    if (nameParts[0].length < 4) {
        nameParts.shift()
    }
    return nameParts.join('')
}

const TableComponent = ({teamsStatistics}: ITableComponent) => {
    console.log('teamsStatistics==========', teamsStatistics)
    const theme: typeof Theme = useTheme()

    const styles = makeStyles(theme.colors)
    return (
        <DataTable
            style={{
                width: theme.deviceWidth,
                paddingRight: 40,
            }}>
            <DataTable.Header>
                <DataTable.Title style={styles.cellPosition}>
                    <Text style={styles.title}> Pos</Text>
                </DataTable.Title>
                <DataTable.Title style={styles.cellTeam}>
                    <Text style={styles.title}> Team</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> P</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> W</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.title}> GD</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                    <Text style={styles.titlePoints}> Pts</Text>
                </DataTable.Title>
            </DataTable.Header>

            {teamsStatistics.map((team, idx) => (
                <DataTable.Row
                    key={team.id}
                    style={team.id === TEAM_IDX ? styles.rowAccent : null}>
                    <DataTable.Cell style={styles.cellPosition}>
                        {idx + 1}
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.cellTeam}>
                        {team.team}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.matches ?? 'no data'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.won ?? 'no data'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.lost ?? 'no data'}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                        {team.points ?? 'no data'}
                    </DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    )
}

export default TableComponent

const makeStyles = (colors: typeof Theme.colors) =>
    StyleSheet.create({
        cellPosition: {
            maxWidth: 20,
            width: 20,
        },
        cellTeam: {
            minWidth: 90,
        },
        title: {
            fontWeight: '700',
            color: 'black',
            fontSize: 14,
        },
        titlePoints: {
            fontWeight: '700',
            color: 'red',
            fontSize: 14,
        },
        rowAccent: {
            backgroundColor: colors.backdrop,
        },
    })
