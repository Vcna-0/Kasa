import Logo from "../../assets/Logo-footer.svg"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className ={ styles.footerContainer }>
      <img className= { styles.logo } src={ Logo } alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
