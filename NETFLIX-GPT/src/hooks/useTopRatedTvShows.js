/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedTvShows } from "../utils/tvSlice";
const useTopRatedTvShows = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedTvShows();
    }, [])

    const getTopRatedTvShows = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        //console.log(json?.results);
        dispatch(addTopRatedTvShows(json?.results))
    }
}

export default useTopRatedTvShows;