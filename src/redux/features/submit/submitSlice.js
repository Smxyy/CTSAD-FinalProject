// src/redux/exerciseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const submitAnswer = createAsyncThunk(
  'exercise/submitAnswer',
  async (data, { rejectWithValue }) => {
    const { uuid, ...body } = data;
    console.log("data:" , data);
    try {
      const response = await fetch(`http://136.228.158.126:50005/exercise/${uuid}/submit_answer/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },      
        body: JSON.stringify(body),                
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const submitsSlice = createSlice({
    name: 'sunbmit',
    initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitAnswer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitAnswer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(submitAnswer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const selectSubmit  = ((state) => state.submits.data);
export default submitsSlice.reducer;