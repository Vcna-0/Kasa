import React from 'react'
import Banner from '../../components/Banner-about/BannerAbout'
import Dropdown from '../../components/Dropdown/Dropdown'
import DataAbout from "../../data/aboutData.json";
import styles from "./About.module.css";


export default function About() {
  return (
    <div className= { styles.aboutcontainer }>
      <Banner/>
      <div className={ styles.dropdownContainer }>
        {DataAbout.map((aboutElement, index) =>
            <Dropdown key={ index } content={ aboutElement.content } title={ aboutElement.title }/>
          )}
      </div>  
    </div>
  )
}
