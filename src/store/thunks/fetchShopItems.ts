//receiveShopItems
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {receiveShopItems} from '../../data/api/services'

export const fetchShopItems = createAsyncThunk(
    'shopItems/fetchShopItems',
    async thunkAPI => {
        const data = await receiveShopItems()
        return data
    },
)
