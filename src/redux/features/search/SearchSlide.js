import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  search: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunk to fetch search results
export const fetchSearch = createAsyncThunk(
  "data/fetchSearch", // Fixed the action type
  async (searchInput, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://136.228.158.126:50005/search?title=${searchInput}`
      );
      return response.data.payload || [];
    } catch (error) {
      return rejectWithValue("Error fetching data. Please try again later.");
    }
  }
);

// Create the slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {}, // Fixed typo: it should be 'reducers' instead of 'reducer'
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading"; // Changed to lowercase for consistency
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "succeeded"; // Changed to lowercase for consistency
        state.search = action.payload; // Fixed: update 'search' not 'skills'
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "failed"; // Changed to lowercase for consistency
        state.error = action.payload; // Correctly setting the error from 'rejectWithValue'
      });
  },
});

// Export reducer
export default searchSlice.reducer;

// Selector to get all search results from state
export const selectAllSearch = (state) => state.search.search;
