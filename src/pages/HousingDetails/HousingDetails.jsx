import { useParams } from 'react-router-dom'
import housingData from "../../data/locationsData.json";
import Tags from "../../components/Tag/Tag"
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './HousingDetails.module.css'
import Carrousel from '../../components/Carrousel/Carrousel';
import Rating from '../../components/Rating/Rating';

export default function HousingDetail() {
  const { id } = useParams()
  let housing = housingData.find(element => element.id === id)

  return (
    <div className= {styles.detailsContainer}>
      <Carrousel picturesList={housing.pictures}/>
      <div className={styles.mainContainer}>
        <div className={ styles.headerContainer }>
          <h1 className={styles.headerTitle}>{housing.title}</h1>
          <h2 className={styles.headerLocation}>{housing.location}</h2>
          <div className={ styles.tagsContainer }>
            <Tags tags={housing.tags}/>
          </div>
        </div>
        <div className={ styles.hostContainer}>
          <div className={ styles.hostInfo }>
            <p className={styles.hostName}>{housing.host.name}</p>
            <img className={styles.hostPicture} src={housing.host.picture} alt="" />
          </div>
        <Rating rating={housing.rating}/>
        </div>
      </div>
      <div className={styles.dropdownContainer}>
        <Dropdown content={housing.description} title={"Description"}/>
        <Dropdown content={housing.equipments} title={"Équipements"}/>
      </div>
    </div>
  )
}
