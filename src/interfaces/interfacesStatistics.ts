import {__String} from 'typescript'

export interface ITeamStatistics {
    team: __String
    position: number
    points: number
    played: number
    won: number
    drawn: number
    goalsFor: number
    goalsAgainst: number
    goalsDifference: number
}
