import axios from "axios";

const LIST_URL = 'https://yts.mx/api/v2/list_movies.json?';
const DETAIL_URL = 'https://yts.mx/api/v2/movie_details.json?';

export const getMovies = async (limit, minimum_rating) => {
  let REQUEST_URL = LIST_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (minimum_rating > 0) {
    REQUEST_URL += `&minimum_rating=${minimum_rating}`;
  }
  const response = await axios.get(REQUEST_URL);
  const { data: { data: { movies } } } = response;
  return movies;
};

export const getMovie = async id => {
  const query = `movie_id=${id}`;
  const REQUEST_URL = DETAIL_URL.concat(query);
  const response = await axios.get(REQUEST_URL);
  const { data: { data: { movie } } } = response;
  return movie;
};
