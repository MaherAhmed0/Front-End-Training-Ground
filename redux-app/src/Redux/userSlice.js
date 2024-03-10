import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        passowrd: ""
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username
            state.email = action.payload.email
            state.passowrd = action.payload.passowrd
        }
    },
})

export const { login } = userSlice.actions

export default userSlice.reducer