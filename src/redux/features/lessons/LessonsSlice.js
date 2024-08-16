import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
// State
const initialState = {
    Lessons: [],
    LessonsById:{},
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null
}

export const fetchLessons = createAsyncThunk(
    "Lessons/fetchLessons",
    async () => {
        const response = await fetch(`${BASE_URL}/lessons`);
        const data = await response.json();
        return data.payload;
    }
);

export const fetchLessonsById = createAsyncThunk(
    "Lessons/fetchLessonsById",
    async (uuid) => {
        const response = await fetch(`${BASE_URL}/lessons/detail/?uuid=${uuid}`);
        const data = await response.json();
        return data.payload;
    }
);

export const LessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {},  // Corrected from "reducer" to "reducers"
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessons.pending, (state) => {
                state.status = "loading";  // Changed from "Loading" to "loading" to keep the case consistent
            })
            .addCase(fetchLessons.fulfilled, (state, action) => {
                state.status = "succeeded";  // Changed from "success" to "succeeded" to keep the case consistent
                state.Lessons = action.payload;  // Corrected to use "Lessons" as in initialState
            })
            .addCase(fetchLessons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchLessonsById.pending, (state) => {
                state.status = "loading"; 
            })
            .addCase(fetchLessonsById.fulfilled, (state, action) => {
                state.status = "succeeded";  // Changed from "success" to "succeeded" to keep the case consistent
                state.LessonsById = action.payload;  // Corrected to use "Lessons" as in initialState
            })
            .addCase(fetchLessonsById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

// Export reducer
export default LessonsSlice.reducer;

// State selector
export const selectAllLessons = (state) => state.lesson.Lessons;
export const selectAllLessonsById = (state) => state.lesson.LessonsById;  // Corrected from "state.lesson" to "state.lessons"
