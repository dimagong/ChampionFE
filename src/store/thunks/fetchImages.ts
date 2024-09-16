import { createAsyncThunk } from '@reduxjs/toolkit'
import {receiveImages} from '../../data/api/services'

export const fetchImages = createAsyncThunk(  
  'imgs/fetchImages',
  async (thunkAPI) => {
    const data = await receiveImages()
    return data
  }
)