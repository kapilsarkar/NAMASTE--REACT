/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addAiringToday} from "../utils/tvSlice";
const useAiringToday = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAiringToday();
    }, [])


    const getAiringToday = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        //console.log(json?.results);
        dispatch(addAiringToday(json?.results));

    }
}

export default useAiringToday;