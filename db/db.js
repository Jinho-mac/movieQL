import axios from "axios";

const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = async (limit, minimum_rating) => {
  const response = await axios.get(API_URL, {
    params: {
      limit,
      minimum_rating
    }
  });
  const { data: { data: { movies } } } = response;
  return movies;
};
