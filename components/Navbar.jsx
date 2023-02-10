import Link from "next/link";

import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
   <nav className={styles['menu-container']}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contac</Link>
   </nav>
  )
}

export default Navbar
