
import styles from "./styles.module.css";
import Loading from "@/components/loading/page";

const FeatureMovieLoading = () => {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  )
}
export default FeatureMovieLoading