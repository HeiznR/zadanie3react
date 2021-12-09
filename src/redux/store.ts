import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import fetchQuote from "./reducers/fetchQuote";
const rootReducer = combineReducers({
    data: fetchQuote,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
