import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'userData',
    initialState: {
        status: 'idle',
        users: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
    },
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('/api/users')
    const data = await res.json()
    return data.users
})

export default usersSlice
