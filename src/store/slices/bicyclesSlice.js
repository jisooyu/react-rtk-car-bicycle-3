import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';
const bicyclesSlice = createSlice({
	name: 'bicycle',
	initialState: [],
	reducers: {
		addBicycle(state, action) {
			state.push(action.payload);
		},
		removeBicycle(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
	},
});

export const { addBicycle, removeBicycle } = bicyclesSlice.actions;
export const bicycleReducer = bicyclesSlice.reducer;
