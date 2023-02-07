import React from 'react'
import Banner from '../../components/Banner-home/BannerHome'
import Card from '../../components/Card/Card'
import styles from './Home.module.css'
import housingDetailsData from "../../data/locationsData.json";


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
