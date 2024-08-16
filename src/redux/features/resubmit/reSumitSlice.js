import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
// Base URL for your API

const initialState = {
    resubmit: {},
    status: "idle",
    error: null
};

export const fetchResubmitExercise = createAsyncThunk(
    "resubmit/fetchResubmitExercise",
    async({ user_uuid, exercises_uuids }, { rejectWithValue }) => {
        console.log("Parameters received:", { user_uuid, exercises_uuids }); // Debug log

        const body = JSON.stringify({
            user_uuid,
            exercises_uuids,
        });

        try {
            const response = await fetch(`${BASE_URL}/exercise/submit_answer/try_again`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }

            const res = await response.json();
            console.log("Response in fetchResubmit:", res);
            return res;
        } catch (error) {
            console.error('Resubmit error:', error);
            return rejectWithValue(error);
        }
    }
);

export const resubmitSlice = createSlice({
    name: 'resubmit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchResubmitExercise.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchResubmitExercise.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.resubmit = action.payload;
                console.log("Action in succeeded:", action);
            })
            .addCase(fetchResubmitExercise.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                console.log("Action in failed:", action);
            });
    },
});

export default resubmitSlice.reducer;
export const selectResubmit = (state) => state.resubmit.resubmit;