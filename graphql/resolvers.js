import { getMovies } from "../db/db";

const resolvers = {
  Query: {
    movies: (_, { limit, minimum_rating }) => getMovies(limit, minimum_rating)
  }
};

export default resolvers;