import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
//state
const initialState = {
    skillNamelevels: [],
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null
}
export const fetchSkillNameLevel = createAsyncThunk(
    "skill/fetchSkillNameLevel",    
    async(skillNameLevel) => {
        const NameLevel = skillNameLevel.split("-");
        const skill_level = NameLevel[0];
        const skill_name = NameLevel[1];
        const response = await fetch(`${BASE_URL}/skills/skill_name=${skill_name}/level=${ skill_level}`);
        const data = await response.json()
        console.log("data1", data.payload)
        return data.payload; 
    }
);
export const skillnamelevel = createSlice({
    name: 'skillNamelevels',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkillNameLevel.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchSkillNameLevel.fulfilled, (state, action) => {
                state.status = "success";
                state.skillNamelevels = action.payload;
            })
            .addCase(fetchSkillNameLevel.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

//export reducer
export default skillnamelevel.reducer;
//state.reducer.product(in initialState)
export const selectNameLevel= ((state) => state.skillNameLevel.skillNamelevels);