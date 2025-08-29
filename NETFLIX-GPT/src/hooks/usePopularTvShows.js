/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularTvShows } from "../utils/tvSlice";

const usePopularTvShows = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularTvShows();
    }, [])

    const getPopularTvShows = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addPopularTvShows(json?.results));
    }
}

export default usePopularTvShows;