import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {receiveVideo} from '../../data/api/services'

export const fetchVideo = createAsyncThunk(  
  'video/fetchVideo',
  async (thunkAPI) => {
    const data = await receiveVideo()
    return data
  }
)