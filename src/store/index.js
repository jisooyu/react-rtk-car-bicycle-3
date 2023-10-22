import { configureStore } from '@reduxjs/toolkit';
import { carReducer, addCar, removeCar } from './slices/carsSlice';
import {
	bicycleReducer,
	addBicycle,
	removeBicycle,
} from './slices/bicyclesSlice';
import { reset } from './actions';

const store = configureStore({
	reducer: {
		cars: carReducer,
		bicycles: bicycleReducer,
	},
});

export { store, reset, addCar, removeCar, addBicycle, removeBicycle };
