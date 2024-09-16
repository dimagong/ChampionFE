import {configureStore} from '@reduxjs/toolkit'

import {
    resultMatchReducer,
    nextMatchesReducer,
    statisticsReducer,
    articlesReducer,
    videoReducer,
    imagesReducer,
} from '../store/slices'

export const store = configureStore({
    reducer: {
        resultMatch: resultMatchReducer,
        nextMatches: nextMatchesReducer,
        statistics: statisticsReducer,
        articles: articlesReducer,
        video: videoReducer,
        images: imagesReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
