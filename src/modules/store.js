import { configureStore, createSlice } from "@reduxjs/toolkit";

const api = createSlice({
	name: "boardReducer",
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
	},
});

const store = configureStore({ reducer: api });
export const { add } = api.actions;
export default store;
