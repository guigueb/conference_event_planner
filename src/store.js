// store.js
import { configureStore } from '@reduxjs/toolkit';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';
import venueReducer from './venueSlice';

export default configureStore({
    reducer: {
        av: avReducer,
        meals: mealsReducer,
        venue: venueReducer,
    },
});
