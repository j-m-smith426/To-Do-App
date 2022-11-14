import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const initialState = { todos: [] };

const { REACT_APP_DATABASE_URL } = process.env;

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_DATABASE_URL}),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getAllTodo: builder.query({
            query: () => '/',
            // transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.status,
            providesTags: ['Todo']
        }),
        saveTodo: builder.mutation({
            query: (todo) => ({
                url: '/save',
                method: 'POST',
                body: todo,
            }),
            // transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.status,
            invalidatesTags: ['Todo']

        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: '/update',
                method: 'PUT',
                body: todo,
            }),
            // transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.status,
            invalidatesTags: ['Todo']

        }),
        deleteTodo: builder.mutation({
            query: (todo) => ({
                url: `/${todo.idtodo}`,
                method: 'DELETE',
            }),
            // transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.status,
            invalidatesTags: ['Todo']

        }),
    })
    
})

export const { useGetAllTodoQuery, useDeleteTodoMutation, useSaveTodoMutation, useUpdateTodoMutation } = apiSlice;

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})