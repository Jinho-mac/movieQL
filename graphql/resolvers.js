import { getMovies, getMovie } from "../db/db";

const resolvers = {
  Query: {
    movies: (_, { limit, minimum_rating }) => getMovies(limit, minimum_rating),
    movie: (_, { id }) => getMovie(id)
  }
};

export default resolvers;