import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        nowTrending: null,
        trendingMovies: null,
    },
    reducers: {
        addNowTrending: (state, action) => {
            state.nowTrending = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
    }
})
export const { addNowTrending, addTrendingMovies } = trendingSlice.actions;
export default trendingSlice.reducer;