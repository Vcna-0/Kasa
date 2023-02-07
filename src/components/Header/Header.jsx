import React from 'react'
import Logo from "../../assets/Logo-header.svg"
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={ styles.header }>
      <Link to ="/">
        <img className= { styles.logo } src={ Logo } alt="Kasa" />
      </Link>
      <nav className={ styles.navigation }>
        <Link className={ styles.link } to ="/">Accueil</Link>
        <Link className={ styles.link } to ="/about">A propos</Link>
      </nav>
    </header>
    
  )
}
