import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import trendingReducer from "./trendingSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        tv: tvReducer,
        trending: trendingReducer,
        gpt: gptReducer,
        config:configReducer,
    }
})

export default appStore