/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and update store.

  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();

  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json?.results);
    dispatch(addNowPlayingMovies(json.results));
  };
}

export default useNowPlayingMovies