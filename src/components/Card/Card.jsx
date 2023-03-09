import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export default function Card({housingDetails}) {
  
  return (
    <div className={styles.cardLocation}>
      <Link to={ `/housingDetails/${housingDetails.id}` }>
        <img className={ styles.cardImg } src={ housingDetails.cover } alt="" />
        <div className= { styles.imgFilter }></div>
        <h2 className= { styles.cardTitle }>{ housingDetails.title }</h2>
      </Link>
    </div>
  )
}
