import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        popularTvShows: null,
        trailerVideo: null,
        topRatedTvShows: null,
        onTheAir: null,
        airingToday: null,
    },
    reducers: {
        addPopularTvShows: (state, action) => {
            state.popularTvShows = action.payload;
        },
        addTopRatedTvShows: (state, action) => {
            state.topRatedTvShows = action.payload;
        },
        addOnTheAir: (state, action) => {
            state.onTheAir = action.payload;
        },
        addAiringToday: (state, action) => {
            state.airingToday = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})

export const { addPopularTvShows, addTrailerVideo, addTopRatedTvShows, addOnTheAir, addAiringToday } = tvSlice.actions;
export default tvSlice.reducer;