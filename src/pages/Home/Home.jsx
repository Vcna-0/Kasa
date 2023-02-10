import Banner from '../../components/Banner-home/BannerHome'
import Card from '../../components/Card/Card'
import housingDetailsData from "../../data/locationsData.json";
import styles from './Home.module.css'


export default function Home() {
  return (
    <div className= { styles.mainContainer }>
      <Banner/>
      <div className= { styles.cardGrid }>
        {housingDetailsData.map(housingDetails =>(
          <Card key={ housingDetails.id } housingDetails={ housingDetails }/>
        ))}
      </div>
    </div>
  )
}
