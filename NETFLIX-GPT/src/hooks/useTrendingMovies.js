/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/trendingSlice";

const useTrendingMovies = ()=>{
const dispatch = useDispatch();
    useEffect(()=>{
       getTrendingMovies();
    },[])

    const getTrendingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",API_OPTIONS);
        const json = await data.json();
        //console.log(json?.results);
        dispatch(addTrendingMovies(json?.results))
    }
    
}

export default useTrendingMovies;