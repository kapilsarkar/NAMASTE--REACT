/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
      getUpcomingMovies();
    },[])

    const getUpcomingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1",API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addUpcomingMovies(json?.results));
    }

}

export default useUpcomingMovies;