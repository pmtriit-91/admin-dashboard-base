import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../scenes/users/usersSlice'

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
})

export default store
