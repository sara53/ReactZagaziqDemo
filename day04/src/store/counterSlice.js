import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		increase: (state, action) => {
			state.count += action.payload;
		},
		decrease: (state, action) => {
			state.count -= action.payload;
		},
	},
});

// actions
export const counterReducer = counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
