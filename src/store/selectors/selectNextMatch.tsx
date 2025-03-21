import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../store'

interface INextMatch {
    guestTeam: string
    homeTeam: string
    score: string
    time: number
}
const optionsTime: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
}

export const selectNextMatch = createSelector(
    (state: RootState) => state.nextMatches,
    value => {
        const teamsDetails: INextMatch = value.value[0]
        const time =
            new Date(teamsDetails?.time).toLocaleDateString(
                'en-US',
                optionsTime,
            ) ?? new Date().toLocaleDateString('en-US', optionsTime)
        return {
            teamHome: teamsDetails?.homeTeam ?? 'No team',
            teamGuest: teamsDetails?.guestTeam ?? 'No team',
            time,
        }
    },
)
