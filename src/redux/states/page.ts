import { createSlice } from "@reduxjs/toolkit";

export const DefautlPageState: PageState = {
	darkMode: true,
}

export const pageStateKey = 'page'

export const pageSlice = createSlice({
	name: 'page',
	initialState: localStorage.getItem(pageStateKey) ? JSON.parse(localStorage.getItem(pageStateKey) as string) : DefautlPageState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode
			localStorage.setItem(pageStateKey, JSON.stringify(state))
		}
	},
})

export const { toggleDarkMode } = pageSlice.actions

export default pageSlice.reducer

export interface PageState {
	darkMode: boolean;
}