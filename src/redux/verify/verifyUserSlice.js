import { BASE_URL } from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create the async thunk using fetch
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async(token, { rejectWithValue }) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": token
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${BASE_URL}/users/me`, requestOptions);
            if (!response.ok) {
                // Handle non-2xx HTTP responses
                const errorMessage = await response.text();
                return rejectWithValue(errorMessage);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            // Handle network errors or other unexpected errors
            const errorMessage = error.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    }
    // 'user/fetchUserData',
    // async(token, { rejectWithValue }) => {
    //     try {
    //         const response = await axios.post(`${BASE_URL}/users/me`, {
    //             token
    //         }, {
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         console.log("response in fetchUserData:", response.data.payload);
    //         return response.data.payload;
    //     } catch (error) {
    //         // Handle error
    //         const errorMessage = error.response.data || error.message || "Something went wrong";
    //         return rejectWithValue(errorMessage);
    //     }
    // }
);

export const verifyUserSlice = createSlice({
    name: 'userVerify',
    initialState: {
        users: null,
        profile: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log("payload in succeed", action.payload);
                state.users = action.payload.payload;
                state.profile = action.payload.payload.profile;
                console.log("profile in succeed", state.profile);
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.status = 'failed';
                console.log("payload in failed", action.payload);
                state.error = action.payload;
            });
    }
});

export const selectUsers = (state) => state.userVerify.users;
export const selectUserProfile = (state) => state.userVerify.profile;
export default verifyUserSlice.reducer;