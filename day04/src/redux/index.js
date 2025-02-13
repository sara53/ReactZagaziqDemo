import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";

export const myStore = configureStore({
	reducer: {
		counterSlice: counterReducer,
	},
});
