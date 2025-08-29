/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addOnTheAir } from "../utils/tvSlice";

const useOnTheAir = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getOnTheAir();
    }, [])

    const getOnTheAir = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        dispatch(addOnTheAir(json?.results))
    }

}

export default useOnTheAir;