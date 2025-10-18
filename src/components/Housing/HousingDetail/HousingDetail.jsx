
import Carrousel from '../../Carrousel/Carrousel'
import Tags from "../../Tag/Tag"
import Rating from '../../Rating/Rating'
import Dropdown from '../../Dropdown/Dropdown'
import styles from './HousingDetail.module.css'

export default function HousingDetail({ housing }) {
  return (
    <div className={styles.mainContainer}>
      <Carrousel picturesList={housing.pictures} />
      <div className={styles.detailContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>{housing.title}</h1>
          <h2 className={styles.headerLocation}>{housing.location}</h2>
          <div className={styles.tagsContainer}>
            <Tags tags={housing.tags} />
          </div>
        </div>
        <div className={styles.hostContainer}>
          <div className={styles.hostInfo}>
            <p className={styles.hostName}>{housing.host.name}</p>
            <img className={styles.hostPicture} src={housing.host.picture} alt="" />
          </div>
          <Rating rating={housing.rating} />
        </div>
      </div>
      <div className={styles.dropdownContainer}>
        <Dropdown content={housing.description} title={"Description"} />
        <Dropdown content={housing.equipments} title={"Équipements"} />
      </div>
    </div>
  )
}