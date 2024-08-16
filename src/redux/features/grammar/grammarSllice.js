import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

// State
const initialState = {
    grammars: [],
    grammarLevels:[],
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null
};

export const fetchGrammars = createAsyncThunk(
    "grammars/fetchGrammars", // Make sure this matches the slice name
    async () => {
        const response = await fetch(`${BASE_URL}/grammars`);
        const data = await response.json();
        return data.payload;
    }
);

export const fetchGrammarsByLevel = createAsyncThunk(
    "grammars/fetchGrammarsByLevel", // Make sure this matches the slice name
    async (level) => {
        const response = await fetch(`${BASE_URL}/grammars/${level}`);
        const data = await response.json();
        return data.payload;
    }
);


export const grammarSlice = createSlice({
    name: 'grammars', // Slice name matches the state name
    initialState,
    reducers: {}, // Fixed typo
    extraReducers: (builder) => {
        builder
            .addCase(fetchGrammars.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchGrammars.fulfilled, (state, action) => {
                state.status = "success";
                state.grammars = action.payload;
            })
            .addCase(fetchGrammars.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            }).addCase(fetchGrammarsByLevel.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchGrammarsByLevel.fulfilled, (state, action) => {
                state.status = "success";
                state.grammarLevels = action.payload;
            })
            .addCase(fetchGrammarsByLevel.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

// Export reducer
export default grammarSlice.reducer;

// Selector
export const selectAllGrammars = (state) => state.grammar.grammars;
export const selectAllGrammarsByLevel = (state) => state.grammars.grammarLevels;
