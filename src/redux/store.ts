import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import fetchingDataReducer from "./reducers/fetchingDataReducer";


const rootReducer = combineReducers({
    fetch: fetchingDataReducer,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
