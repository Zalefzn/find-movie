import axios from 'axios';

const apiKey = "cfe07e09c39301d49df5b6529e0552b6";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results;
}

export const searchMovie = async(x) =>{
    const search = await axios.get(`${baseUrl}/search/movie?query=${x}&api_key=${apiKey}`);
    return search.data;
}