import MovieContainer from "@/containers/movie/page";
import Movies from "@/mocks/movies.json";
import notFound from "next/navigation";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MoviePage = async ({ params, searchParams }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened")
  }
  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
