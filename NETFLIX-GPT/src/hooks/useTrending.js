/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowTrending } from "../utils/trendingSlice";

const useTrending = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTrending();
    }, [])

    const getTrending = async () => {
        const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        //console.log(json?.results);
        dispatch(addNowTrending(json?.results));
    }

}

export default useTrending;