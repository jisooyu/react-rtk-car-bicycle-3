import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';
const carsSlice = createSlice({
	name: 'car',
	initialState: [],
	reducers: {
		addCar(state, action) {
			state.push(action.payload);
		},
		removeCar(state, action) {
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

export const { addCar, removeCar } = carsSlice.actions;
export const carReducer = carsSlice.reducer;
