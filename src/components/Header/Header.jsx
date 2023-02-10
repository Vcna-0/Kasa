import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo-header.svg"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={ styles.header }>
      <Link to ="/">
        <img className= { styles.logo } src={ Logo } alt="Kasa" />
      </Link>
      <nav className={ styles.navigation }>
        <NavLink 
          to ="/"    
          className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
          } 
        >
          Accueil
        </NavLink>
        
        <NavLink 
          to ="/about" 
          className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
          } 
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}
