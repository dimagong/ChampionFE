import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {receiveLastMatches, receiveNextMatches} from '../../data/api/services'

export const fetchLastMatches = createAsyncThunk(
    'lastMatches/fetchLastMatches',
    async thunkAPI => {
        const data = await receiveLastMatches()
        return data
    },
)
