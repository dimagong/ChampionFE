import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {receivePlayers} from '../../data/api/services'

export const fetchPlayers = createAsyncThunk(
    'players/fetchPlayers',
    async thunkAPI => {
        const data = await receivePlayers()
        return data
    },
)
