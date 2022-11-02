import { configureStore } from "@reduxjs/toolkit";

export const initialState = {todos: []};

export const reducer = (state = initialState, action) => {
    // console.log(state, action.payload);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'UPDATE':
            if (JSON.stringify(state.todos) !== JSON.stringify(action.payload)) {
                newState.todos = action.payload
            }
            return newState;
            default:
                return newState;
    }

}

export const store = configureStore({
    reducer
})