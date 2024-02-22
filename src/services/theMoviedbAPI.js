import axios from "axios"

axios.defaults.baseURL = "https://api.themoviedb.org";
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGJmZTU2ZDg0N2ExYWQwYmIxMDUyODQ3MDZlMzA3MCIsInN1YiI6IjY1Y2Y0ZmJkODczZjAwMDE4YTBkNzgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LyxEDpgpr0aMEr5KqtgGYBHZxsnQxzc-rTD-Lab__Ck";

const fetchMovies = async () => {
    const response = await axios.get("3/trending/all/day?language=en-US", {
        headers: {
            Authorization: ACCESS_TOKEN,
        }
    });
    return response;
}

const fetchMovieById = async (id) => {
    const url = `3/movie/${id}`;
    const response = await axios.get(url, {
        headers: {
            Authorization: ACCESS_TOKEN,
        }
    });
    return response;
}

const fetchCast = async (id) => {
    const url = `3/movie/${id}/credits`;
    const response = await axios.get(url, {
        headers: {
            Authorization: ACCESS_TOKEN,
        }
    });
    return response;
}

const fetchReviews = async (id) => {
    const url = `3/movie/${id}/reviews`;
    const response = await axios.get(url, {
        headers: {
            Authorization: ACCESS_TOKEN,
        }
    });
    return response;
}

const fetchMoviesByQueryString = async (queryString) => {
    const url = `3/search/movie?query=${queryString}`;
    const response = await axios.get(url, {
        headers: {
            Authorization: ACCESS_TOKEN,
        }
    });
    return response;
}

export {
    fetchMovies,
    fetchMovieById,
    fetchCast,
    fetchReviews,
    fetchMoviesByQueryString,
}


