import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export const selectFinishedMatches = createSelector(
  (state: RootState) => state.statistics.value,
    value => {
      const findTeam: any = value.results.find((item: any) => item?.team?.name === 'TJ Družstevník Liptovská Štiavnica')
      return findTeam?.matches ?? []
  },
);
