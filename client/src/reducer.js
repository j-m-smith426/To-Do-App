import { configureStore } from "@reduxjs/toolkit";

export const initialState = {todos: []};

// Implement Slice for api

export const store = configureStore({
    reducer
})