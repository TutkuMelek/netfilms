import styles from "./styles.module.css"
import Link from "next/link";
import { SiPlayerdotme } from "react-icons/si";
const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <SiPlayerdotme /> NETFİLMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/" >Movies</Link>
          <Link href="/" >Series</Link>
          <Link href="/" >Kids</Link>
        </nav>
      </div>
    </header>
  )
}
export default Header