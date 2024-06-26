import {useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import {addPopularMovies} from "../utils/movieSlice";

const usePopularMovies = ()=>{

  const PopularMovies = useSelector((store) => store.movies.PopularMovies);
    //Fetch the data from TMDB API and update into store.
    const dispatch = useDispatch();
  
  const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect (()=>{
    if(!PopularMovies) getPopularMovies();
  },[]);

}

export default usePopularMovies;