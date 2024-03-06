import { createSelector } from '@reduxjs/toolkit'

export const usersDataSelector = (state) => state.usersData.users
