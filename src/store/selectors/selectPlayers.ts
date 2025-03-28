import {createSelector} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {TEAM_IDX} from '@env'
import {IPlayers} from '@src/interfaces'

export const selectPlayers = createSelector(
    (state: RootState) => state.players,
    value => {
        //process.env.API_URL
        // const findPlayers: any[] = value.players.filter(
        //     (item: any) => item.teamId == TEAM_IDX,
        // );
        // return findPlayers as IPlayers[];

        return value.players
    },
)
