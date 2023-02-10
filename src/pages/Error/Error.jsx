import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export default function Error() {
  return (
    <div className= { styles.content }>
      <div className= { styles.contentTitles }>
        <h1 className= { styles.codeError }>404</h1>
        <h2 className= { styles.message }>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <Link className= { styles.link } to ="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
