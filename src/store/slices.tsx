import {createSlice} from '@reduxjs/toolkit'

import {fetchStatistics} from './thunks/fetchStatistics'
import {fetchNextMatches} from './thunks/fetchNextMatches'
import {fetchArticles} from './thunks/fetchArticles'
import {fetchVideo} from './thunks/fetchVideo'
import {fetchImages} from './thunks/fetchImages'
import {IVideoImages} from '@interfaces/interfacesVideoImages'
import {fetchLastMatches} from './thunks/fetchLastMatches'
import {fetchPlayers} from './thunks/fetchPlayers'

//import type {RootState} from '../store/store';

// Define a type for the slice state
interface IScoreState {
    value: string
}

interface IStatistics {
    players: any[]
    results: any[]
}

export const resultMatchSlice = createSlice({
    name: 'resultMatch',
    initialState: {
        value: '0 - 0',
    } as IScoreState,
    reducers: {
        changeResultMatch: (state, action) => {
            state.value = action.payload
        },
    },
})

export const lastMatches = createSlice({
    name: 'lastMatches',
    initialState: {
        lastMatches: [],
    },
    reducers: {
        // setNextMatch: (state, action) => {
        //   state.nextmatches = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchLastMatches.pending, (state, action) => {
                // console.log('fetchNextMatches.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchLastMatches.fulfilled, (state, action) => {
                const {payload} = action
                state.lastMatches = payload

                //
                //state.value = payload;
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.entities.push(action.payload)
                //   state.currentRequestId = undefined
                // }
            })
            .addCase(fetchLastMatches.rejected, (state, action) => {
                //console.log('fetchLastMatches.rejected')
                const {requestId} = action.meta
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.error = action.error
                //   state.currentRequestId = undefined
                // }
            })
    },
})

export const nextMatchesSlice = createSlice({
    name: 'nextMatches',
    initialState: {
        value: [],
    },
    reducers: {
        // setNextMatch: (state, action) => {
        //   state.nextmatches = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNextMatches.pending, (state, action) => {
                // console.log('fetchNextMatches.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchNextMatches.fulfilled, (state, action) => {
                const {payload} = action
                state.value = payload

                //
                //state.value = payload;
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.entities.push(action.payload)
                //   state.currentRequestId = undefined
                // }
            })
            .addCase(fetchNextMatches.rejected, (state, action) => {
                console.log('fetchNextMatches.rejected')
                const {requestId} = action.meta
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.error = action.error
                //   state.currentRequestId = undefined
                // }
            })
    },
})

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        results: [],
    },
    reducers: {
        // setStatistics: (state, action) => {
        //   state.value = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchStatistics.pending, (state, action) => {
                //console.log('fetchStatistics.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchStatistics.fulfilled, (state, action) => {
                const {payload} = action
                state.results = payload
                //
                //;
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.entities.push(action.payload)
                //   state.currentRequestId = undefined
                // }
            })
            .addCase(fetchStatistics.rejected, (state, action) => {
                //console.log('fetchStatistics.rejected')
                const {requestId} = action.meta
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.error = action.error
                //   state.currentRequestId = undefined
                // }
            })
    },
})

export const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPlayers.pending, (state, action) => {})
            .addCase(fetchPlayers.fulfilled, (state, action) => {
                //console.log('fetchArticles.fulfilled')
                const {payload} = action
                state.players = payload
            })
            .addCase(fetchPlayers.rejected, (state, action) => {})
    },
})

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        value: [],
    },
    reducers: {
        // setStatistics: (state, action) => {
        //   state.value = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                //console.log('articles.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                //console.log('fetchArticles.fulfilled')
                const {payload} = action
                state.value = payload
                //
                //;
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.entities.push(action.payload)
                //   state.currentRequestId = undefined
                // }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                //console.log('fetchArticles.rejected')
                const {requestId} = action.meta
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.error = action.error
                //   state.currentRequestId = undefined
                // }
            })
    },
})

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        value: [] as IVideoImages[],
    },
    reducers: {
        // setStatistics: (state, action) => {
        //   state.value = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchVideo.pending, (state, action) => {
                //console.log('video.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                //console.log('fetchVideo.fulfilled')
                const {payload} = action
                state.value = payload
                //
                //;
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.entities.push(action.payload)
                //   state.currentRequestId = undefined
                // }
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                //console.log('fetchVideo.rejected')
                const {requestId} = action.meta
                // if (
                //   state.loading === 'pending' &&
                //   state.currentRequestId === requestId
                // ) {
                //   state.loading = 'idle'
                //   state.error = action.error
                //   state.currentRequestId = undefined
                // }
            })
    },
})

export const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        value: [] as IVideoImages[],
    },
    reducers: {
        // setStatistics: (state, action) => {
        //   state.value = action.payload;
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchImages.pending, (state, action) => {
                //console.log('fetchImages.pending')
                // if (state.loading === 'idle') {
                //   state.loading = 'pending'
                //   state.currentRequestId = action.meta.requestId
                // }
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                //console.log('fetchImages.fulfilled')
                const {payload} = action
                state.value = payload
            })
            .addCase(fetchImages.rejected, (state, action) => {
                //console.log('fetchImages.rejected')
                const {requestId} = action.meta
            })
    },
})

// Action creators are generated for each case reducer function
export const {changeResultMatch} = resultMatchSlice.actions
//export const {setNextMatch} = nextMatchSlice.actions;
//export const {setStatistics} = statisticsSlice.actions;

export const resultMatchReducer = resultMatchSlice.reducer
export const nextMatchesReducer = nextMatchesSlice.reducer
export const statisticsReducer = statisticsSlice.reducer
export const articlesReducer = articlesSlice.reducer
export const videoReducer = videoSlice.reducer
export const imagesReducer = imagesSlice.reducer
export const lastMatchesReducer = lastMatches.reducer
export const playersReducer = playersSlice.reducer
