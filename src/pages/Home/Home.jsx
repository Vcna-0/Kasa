import Banners from '../../components/Banners/Banners'
import Housing from '../../components/Housing/Housing'
import housingDetailsData from "../../data/locationsData.json"
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Banners type="home"/>
      <div className={styles.cardGrid}>
        {housingDetailsData.map(housingData => (
          <Housing key={housingData.id} housingData={housingData} viewType="card" />
        ))}
      </div>
    </div>
  )
}
