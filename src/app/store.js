import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import nameSwitcherReducer from "../features/nameSwitcher/nameSwitcherSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		name: nameSwitcherReducer,
	},
});
