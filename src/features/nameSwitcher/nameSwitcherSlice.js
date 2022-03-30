import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
};

export const nameSwitcherSlice = createSlice({
	name: "nameSwitcher",
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
		setNameToRobert: (state) => {
			state.name = "Robert";
		},
		resetName: (state) => {
			state.name = "";
		},
	},
});

export const { setName, setNameToRobert, resetName } = nameSwitcherSlice.actions;

export default nameSwitcherSlice.reducer;
