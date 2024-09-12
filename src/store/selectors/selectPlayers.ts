import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import { IPlayers } from './../../interfaces/interfacesStatistics';
import {TEAM_IDX} from '@env';

export const selectPlayers = createSelector(
    (state: RootState) => state.statistics.value,
    value => {
        //process.env.API_URL
        const findPlayers: any[] = value.players.filter(
            (item: any) => item.teamId == TEAM_IDX,
        );
        return findPlayers as IPlayers[];
    },
);

