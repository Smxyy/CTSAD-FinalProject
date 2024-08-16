import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
import {
    storeAccessToken,
    removeAccessToken,
    getAccessToken,
} from "../../../lib/secureLocalStorage";
import axios from "axios";

const userToken = getAccessToken();
console.log("");

const initialState = userToken ? {
    isLoggedIn: true,
    userToken,
    user: {},
    verifyEmail: {},
    resetPassword: null,
    newPassword: {},
    status: "idle",
    error: null,
    fileURL: ""
} : {
    isLoggedIn: false,
    userToken: null,
    verifyEmail: {},
    resetPassword: null,
    newPassword: {},
    status: "idle",
    error: null,
    fileURL: ""
};

export const fetchCreateUser = createAsyncThunk(
    "user/fetchCreateUser",
    async({ username, email, password, confirm_password }) => {
        const body = JSON.stringify({
            username,
            email,
            password,
            confirm_password,
        });
        // console.log('Request Body:', body);
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });
        const user = await response.json();
        // console.log("user:",user);
        return user;
    }
);

export const fetchVerifyEmail = createAsyncThunk(
    "user/fetchVerifyEmail",
    async({ email }) => {
        const body = JSON.stringify({
            email,
        });
        const response = await fetch(
            `${BASE_URL}/request/reset-password?email=${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            }
        );
        const apiResponse = await response.json();
        console.log("apiResponse:", apiResponse);
        return apiResponse;
    }
);

export const fetchEmailOtp = createAsyncThunk(
    "user/fetchEmailOtp",
    async({ email, otp }) => {
        const response = await axios.post(
            `${BASE_URL}/request/reset-password/otp-verify`, {
                email,
                otp,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("response in userSlice", response);
        return response.data;
    }
);

export const fetchNewPassword = createAsyncThunk(
    "user/fetchNewPassword",
    async({ email, new_password, confirm_password }) => {
        const body = JSON.stringify({
            email: email.toString(),
            new_password,
            confirm_password,
        });
        const response = await fetch(`${BASE_URL}/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });
        const newResponse = await response.json();
        console.log("new Response in userSlice:", newResponse);
        return newResponse;
    }
);

export const fetchUserLogin = createAsyncThunk(
    "user/fetchUserLogin",
    async({ email, password }) => {
        const body = JSON.stringify({
            email,
            password,
        });
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        const data = await response.json();
        if (data.access_token) {
            console.log("accessToken in fetchUserLogin", data);
            storeAccessToken(data);
        } else {
            throw new Error(data.detail || "Login failed");
        }
        return data;
    }
);

export const fetchUpdateUserInfo = createAsyncThunk(
    "user/fetchUpdateUserInfo",
    async({ user_uuid, token, user_name, profile, bio }) => {
        const body = JSON.stringify({
            user_name,
            profile,
            bio
        });

        const response = await fetch(`${BASE_URL}/users/${user_uuid}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body,
        });

        console.log("data response: ", response);

        if (!response.ok) {
            throw new Error("Failed to update user information");
        }

        const data = await response.json();
        console.log("data in fetchUpdateUserInfo:", data);
        return data;
    }
);

export const fetchUploadFile = createAsyncThunk(
    "user/fetchUploadFile",
    async({ file }) => {
        const formData = new FormData();
        formData.append('files', file);
        try {
            const response = await fetch(`${BASE_URL}/files`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log("data response in fetchUploadFile:", result);
            // return result.fileUrl; // Assuming the server returns the URL of the uploaded file
            return result;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            removeAccessToken();
            state.isLoggedIn = false;
            state.userToken = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCreateUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchCreateUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

        .addCase(fetchEmailOtp.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEmailOtp.fulfilled, (state, action) => {
                state.status = "success";
                console.log("reset password in userSlice:", action.payload);
                state.resetPassword = action.payload;
                console.log("done otp:", state.resetPassword);
            })
            .addCase(fetchEmailOtp.rejected, (state) => {
                state.status = "failed";
            })

        .addCase(fetchVerifyEmail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
                state.status = "success";
                state.verifyEmail = action.payload;
            })
            .addCase(fetchVerifyEmail.rejected, (state) => {
                state.status = "failed";
            })

        .addCase(fetchUserLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserLogin.fulfilled, (state, { payload }) => {
                // state.status = "success";
                // // state.accessToken = action.payload;
                // storeAccessToken(action.payload);
                state.userToken = payload.access_token;
                state.status = "success";
                console.log("done login", state.userToken);
                console.log("user info", payload);
                state.isLoggedIn = true;
            })
            .addCase(fetchUserLogin.rejected, (state) => {
                state.status = "failed";
            })

        .addCase(fetchNewPassword.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchNewPassword.fulfilled, (state, action) => {
                state.status = "success";
                console.log("newPassowrd in userSlice", action.payload);
                state.newPassword = action.payload;
            })
            .addCase(fetchNewPassword.rejected, (state) => {
                state.status = "failed";
            })

        .addCase(fetchUpdateUserInfo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUpdateUserInfo.fulfilled, (state, action) => {
                state.status = "success";
                console.log("data in userSlice", action.payload);
            })
            .addCase(fetchUpdateUserInfo.rejected, (state, action) => {
                state.status = "failed";
                console.log("failed data in userSlice", action);
            })

        .addCase(fetchUploadFile.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUploadFile.fulfilled, (state, action) => {
                state.status = "success";
                console.log("fetch data uplaod in userSlice", action.payload);
                state.fileURL = action.payload.payload.file_urls[0].file_path;
                console.log("fileURL:", state.fileURL)
            })
            .addCase(fetchUploadFile.rejected, (state, action) => {
                state.status = "failed";
                console.log("failed uploaded data in userSlice", action);
            });
    },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserEmail = (state) => state.user.verifyEmail;
export const selectUserPassword = (state) => state.user.resetPassword;
export const selectAccessToken = (state) => state.user.storeAccessToken;
export const selectNewPassword = (state) => state.user.newPassword;
export const selectUserToken = (state) => state.user.userToken;
export const selectIsLoginIn = (state) => state.user.isLoggedIn;
export const selectFileURL = (state) => state.user.fileURL;