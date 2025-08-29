import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieResults: null,
        gptMovieNames: null,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state, action) => {
            const { gptMovieNames, movieResults } = action.payload;
            state.gptMovieNames = gptMovieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;

