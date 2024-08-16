import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
import { getAccessToken } from "../../../lib/secureLocalStorage";

const initialState = {
    exercise: [],
    answer: [],
    status: "idle",
    error: null,
};

export const fetchSubmitExercises = createAsyncThunk(
    "exerciseSubmit/fetchSubmitExercises",
    async({ user_uuid, token }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/exercise/submit_answer/user?id=${user_uuid}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log("Error response data:", errorData);
                return rejectWithValue(errorData.detail || "An error occurred.");
            }

            const data = await response.json();
            console.log("data in fetchSubmitExercises:", data);
            return data;
        } catch (error) {
            console.error("fetchSubmitExercises error:", error);
            return rejectWithValue(error.message);
        }
    }
);

// Fetch exercise data by level
export const fetchSubmitExercisesByLevel = createAsyncThunk(
    "exerciseSubmit/fetchSubmitExercisesByLevel",
    async({ user_uuid, token, level }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/exercise/submit_answer/userId=${user_uuid}/level=${level}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log("Error response data:", errorData);
                return rejectWithValue(errorData.detail || "An error occurred.");
            }

            const data = await response.json();
            console.log("data in fetchSubmitExercisesByLevel:", data);
            return data.payload;
        } catch (error) {
            console.error("fetchSubmitExercisesByLevel error:", error);
            return rejectWithValue(error.message);
        }
    }
);

// export const fetchSubmitExercisesByLevel = createAsyncThunk(
//     "exerciseSubmit/fetchSubmitExercisesByLevel",
//     async({ user_uuid, level }) => { // Accept an object
//         const response = await fetch(`${BASE_URL}/exercise/submit_answer/userId=${user_uuid}/level=${level}`);
//         const data = await response.json();
//         console.log("data in fetchSubmitExercisesByLevel:", data);
//         return data.payload;
//     }
// );

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubmitExercises.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSubmitExercises.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.exercise = action.payload;
                console.log("fulfilled in fetchSubmitExercises:", action);
            })
            .addCase(fetchSubmitExercises.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                console.log("rejected in fetchSubmitExercises:", action);
            })
            .addCase(fetchSubmitExercisesByLevel.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSubmitExercisesByLevel.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.answer = action.payload;
                console.log("fulfilled in fetchSubmitExercisesByLevel:", action);
            })
            .addCase(fetchSubmitExercisesByLevel.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                console.log("rejected in fetchSubmitExercisesByLevel:", action);
            });
    }
});

export default exerciseSlice.reducer;

export const selectAllSubmitExercises = (state) => state.exercise.exercise;
export const selectSubmitExercisesByLevel = (state) => state.exercise.answer;