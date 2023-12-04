import FeaturedMovie from "@/components/featured-movie/page";
const MovieContainer = ({ movie }) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false} />
  )
}
export default MovieContainer;