import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
//state
const initialState = {
    vocabularys: [],
    vocabularysLevels:[],
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null
}
export const fetchvocabularys = createAsyncThunk(
  "vocabulary/fetchVocabulary",
  async() => {
      const response = await fetch(`${BASE_URL}/vocabularies`);
      const data = await response.json()
      return data.payload;
  }
);
export const fetchVocabularysByLevel = createAsyncThunk(
    "vocabulary/fetchVocabularysByLevel", // Make sure this matches the slice name
    async (level) => {
        const response = await fetch(`${BASE_URL}/vocabularies/${level}`);
        const data = await response.json();
        return data.payload;
    }
);
export const vocabularySlice = createSlice({
  name: 'vocabularys',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchvocabularys.pending, (state) => {
              state.status = "Loading";
          })
        .addCase(fetchvocabularys.fulfilled, (state, action) => {
              state.status = "success";
              state.vocabularys = action.payload;
          })
        .addCase(fetchvocabularys.rejected, (state, action) => {
              state.status = "failed";
              state.error = action.error.message;
          })
        .addCase(fetchVocabularysByLevel.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(fetchVocabularysByLevel.fulfilled, (state, action) => {
            state.status = "success";
            state.vocabularysLevels = action.payload;
        })
        .addCase(fetchVocabularysByLevel.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
  }
});
//export reducer
export default vocabularySlice.reducer;
//state.reducer.product(in initialState)
export const selectAllVocabluary= ((state) => state.vocabluary.vocabularys);
export const selectAllVocabluaryByLevel= ((state) => state.vocabluary.vocabularysLevels);