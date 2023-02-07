import React from 'react'
import BannerImg from "../../assets/Banner-home.png"
import styles from "./BannerHome.module.css"

export default function banner() {
  return (
    <div className= { styles.banner }>
      <img  className= { styles.bannerImg } src={ BannerImg } alt="" />
      <div className= { styles.bannerTxt }>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  )
}
